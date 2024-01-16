var express = require('express')
var mongoose = require('mongoose')
const cors = require('cors')
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const ImageModel = require('./models/imageNotice.model')


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://ritikrajcoder:519sO7niceZ0ltox@cluster0.qclenjk.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Connected Db");
        app.listen(80,()=>{
            console.log("http://localhost:80/");
        })
    }).catch((err)=>{
        console.log(err);
    })
}


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
app.post("/uploadPhoto", upload.single("myImage"),async (req, res) => {
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
    const datimg = await ImageModel.create({image:obj.img})
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
connectDB()