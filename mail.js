var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    // secure: true,
    //   service: 'gmail',
  auth: {
    user: 'ritikrajcoder@gmail.com',
    // pass: 'Ritik@1738'
    pass: 'gkbdvuzezkbhqlqd'
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

module.exports = sendOtp