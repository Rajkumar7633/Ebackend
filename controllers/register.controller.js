var UserModel = require('../models/user.model')

const generateOtp = require('../utils')
var OtpModel = require('../models/otp.model')
const bcrypt = require("bcryptjs");
const  sendOtp  = require('../mailPass');


const verifyEmail = async (req,res)=>{
    // const {username,email,password,verify,messages} = req.body
    const {info} = req.body
    const commonPassword = "12345"
    const salt = "$2a$10$CwTycUXWue0Thq9StjUM0u"
    const hashedPassword = bcrypt.hashSync(commonPassword,salt)
    const mp = {
        'admin' : 0,
        'dean' : 1,
        'head' : 2,
        'warden':2,
        'teacher': 3,
        'caretaker' :3,
        'student':4
    }
    try{
        var prom = [];
    for(var i = 0; i<info.length;i++){
           var alreadyExistedMail = await UserModel.findOne({email:info[i].email})
           if(alreadyExistedMail){
               console.log("Already Existed Mail---->");
               console.log(info[i].email);
               console.log("");
           }
           else{
            var rl = info[i].role;
            var ulevel = mp[rl];
            const dt = await UserModel.create({
             username :info[i].username,
             email: info[i].email,
             password : hashedPassword,
             uid : info[i].uid,
             department : info[i].department.toLowerCase(),
             role : info[i].role,
             userlevel : ulevel
            })
           var a = await sendOtp(info[i].username,info[i].email,12345)
           console.log(a);
           prom.push(a)
           }
        }
        Promise.all(prom).then(()=>{
            return  res.status(200).json({success : "Done :-)"})
        })
    }
    catch(e){
        console.log("------------------");
        console.log(e);
        return res.status(400).json({error : e.message})
    }
     return res.status(200).json({success : "Done :-)"})
    // try{
    // var alreadyExistedMail = await UserModel.findOne({email: email})
    // if(alreadyExistedMail){
    //     res.send({err : "Already Existed Mail" })
    // }
    // else{
    //         const data = await UserModel.create({username, email,password,verify,messages})
                    // const otp = generateOtp()
                    // console.log("Otp -->" + otp);
                    // const dataOtp = await OtpModel.create({email,otp})
    //                 sendOtp(email,otp)
            
    //         res.status(200).json(data)
    //     }
    // }
    // catch(error){
    //     res.status(400).json({error : error.message})
    // }

}

module.exports = verifyEmail


