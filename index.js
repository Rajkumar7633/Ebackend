var express = require('express')
var mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require("body-parser");
require('dotenv').config()


const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static('tmp'))


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
  try {
    app.listen(PORT).on('error', (err) => {
      console.log('ERROR: ' + err)
      console.log('Exiting...')
    })
    console.log('Listening on port ' + PORT)
  } catch (err) {
    console.log('ERROR: ' + err)
    console.log('Exiting...')
  }
})



/// [Root App]
app.get('/', function (req, res) {
  res.status(200);
  res.send("This is from root");
})

app.use('/api', require("./routers/register.router"))
app.use('/notice', require("./routers/notice.router"))
app.use('/auth', require('./routers/authorize.router'))
// connectDB()
