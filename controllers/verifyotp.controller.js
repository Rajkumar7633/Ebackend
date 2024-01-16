var UserModel = require('../models/user.model')
var OtpModel = require('../models/otp.model')

const verifyOtp = async (req,res)=>{
    var {email,otp} = req.body
    console.log(req.body);
    console.log(email);
    console.log(otp);
    otp = parseInt(otp)
    console.log(otp);

    const isVaildEmail = await UserModel.findOne({email:email})
    if(!isVaildEmail){
        res.send({err:"No Such User"})
    }else{
        const isOtp = await OtpModel.findOne({email : email})
        if(isOtp){
            if(isOtp.otp === otp && isOtp){
                const data = await UserModel.findOneAndUpdate({email: email},{
                    verify : true
                })
                const deleteOtp = await OtpModel.findOneAndDelete({email:email})
                res.send({status : "successfully verified"})
                // res.redirect('back');
            }
            else{
                res.send({err : "Incorrect OTP"})
            }
        }
        else{
            res.send({err : "Already Verified User"})
        }
    }
}

module.exports = verifyOtp
