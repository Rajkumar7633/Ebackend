var nodemailer = require('nodemailer');
require('dotenv').config()


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  //   service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});
const sendNotice = (username = "user", email, note, heading, imgUrl = "null") => {
  // console.log(email + username + note + heading)
  let strtext;
  console.log(imgUrl);
  if (imgUrl == "null") {
    strtext = `<h1>Hello ${username}</h1><h3>${note}</h3>`;
  }
  else {
    strtext = `<h1>Hello ${username}</h1><h3>${note}</h3><img src="${imgUrl}" alt="Notice Image">`;
  }
  console.log("<--------Came--------->");
  return new Promise((resolve, reject) => {
    var mailOptions = {
      from: 'ritikrajcoder@gmail.com',
      to: email,
      subject: 'E-Suchana Notice: ' + heading,
      // text: `Your default password is ${password}`
      html: strtext
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("--->" + error);
        reject(false)
      } else {
        console.log('Email sent: ' + info.response);
        resolve(true)
      }
    });
  })
}

module.exports = sendNotice