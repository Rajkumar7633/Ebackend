const generateOtp = ()=>{
    var otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp);
    return otp
}
module.exports = generateOtp