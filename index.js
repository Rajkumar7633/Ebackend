var express = require('express')
var mongoose = require('mongoose')
const cors = require('cors')
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const Notices = require('./models/imageNotice.model')
require('dotenv').config()


const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('static'))
const connectDB = ()=>{
    // mongoose.connect("mongodb://localhost:27017/nms").then(()=>{
    //     console.log("Connected Db");
    //     app.listen(80,()=>{
    //         console.log("http://localhost:80/");
    //     })
    // }).catch((err)=>{
    //     console.log(err);
    // })
    mongoose.connect(process.env.DB_URL,{useNewUrlParser: true}).then(()=>{
        console.log("Connected Db");
        app.listen(process.env,PORT,()=>{
            console.log("http://localhost:80/");
        })
    }).catch((err)=>{
        console.log(err);
    })
}
// mongoose.set('strictQuery', false);
// mongoose.connect(process.env.DB_URL,{useNewUrlParser: true})
//   .then(() => {
//     console.log('connected to database')
//     // listen to port
//     app.listen(80, () => {
//       console.log('listening for requests on port', process.env.PORT)
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })  
const connectDBMONGO = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

connectDBMONGO().then(() => {
    console.log("--------------->")
  // app.listen(4000, () => {
  //     console.log("listening for requests");
  // })
    try {
    app.listen(3000).on('error', (err) => {
        console.log('ERROR: ' + err)
        console.log('Exiting...')
    })
    console.log('Listening on port ' + port)
} catch (err) {
    console.log('ERROR: ' + err)
    console.log('Exiting...')
}
})
  // app.listen(PORT, () => {
  //     console.log("listening for requests");
  // })
// app.use(bodyParser.json({limit: '1005mb'}));

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//     limit: '75mb',
//     parameterLimit: 50000000,
//   }),
// );

app.get('/',function (req,res){
res.send("<h1>Hello</h1>")
})
app.get('/img',function(req,res){
res.sendFile(__dirname+"/img.html")
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage: storage });
app.post("/uploadPhoto", upload.single("myNoticeImage"),async (req, res) => {
  const {department,level,note,heading,from,fromdepartment} = req.body
  const date = new Date().toLocaleDateString('en-US', 
{day: "numeric",
month: "short",
year:"numeric"})
const time =  new Date().toLocaleTimeString('en-US', 
{ hour12: true, hour: "numeric", minute: "numeric"});
  // department = department.toLowerCase()
  levelmap = {
    'dean' : 1,
    'head' : 2,
    'warden':2,
    'teacher': 3,
    'caretaker' :3,
    'student':4
  }
  // level = level.toLowerCase()
  // level = levelmap[level]
  // fromdepartment = fromdepartment.toLowerCase()
  const obj = {
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  console.log(obj);
 try{ 
    const datimg = await Notices.create({
      time : time,
      date : date,
      department : department,
      level : level,
      note : note,
      heading : heading,
      from : from,
      fromdepartment : fromdepartment,
      image:obj.img
    })
    res.json(datimg)
}
 catch(error){
    res.status(400).json({error : error.message})
}
  
//   const newImage = new ImageModel({
//     image: obj.img,
//   });
//   newImage.save((err) => {
//     err ? console.log(err) : res.redirect("/");
//   });
});

app.use('/api',require("./routers/register.router"))
app.use('/notice',require("./routers/notice.router"))
app.use('/auth',require('./routers/authorize.router'))
// connectDB()
