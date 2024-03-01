var nodemailer = require('nodemailer');
require('dotenv').config()


var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    // secure: true,
    //   service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});
 const sendOtp = (username="user",email,password)=>{

  var mailOptions = {
    from: 'ritikrajcoder@gmail.com',
    to: email,
    subject: 'Welcome to E-Suchana ',
    // text: `Your default password is ${password}`
    html : `<h1>Hello ${username}</h1><h2>Your Default Password is ${password}</h2>`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("--->"+error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
 const sendNotice = (username="user",email,note,heading)=>{

  var mailOptions = {
    from: 'ritikrajcoder@gmail.com',
    to: email,
    subject: 'E-Suchana Notice: '+heading,
    // text: `Your default password is ${password}`
    html : `<h1>Hello ${username}</h1><h3>${note}</h3>`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("--->"+error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {sendOtp,sendNotice}