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
 const sendOtp = (email,otp)=>{

  var mailOptions = {
    from: 'ritikrajcoder@gmail.com',
    to: email,
    subject: 'Default Password for E-Suchana ',
    text: `Your default password is ${otp}`
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