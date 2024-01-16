const bcrypt = require("bcryptjs");
var UserModel = require('../models/user.model')

const authLogin = async(req,res)=>{
    const {email , password } = req.body;
    const salt = "$2a$10$CwTycUXWue0Thq9StjUM0u"
    console.log("--->" + password)
    const hashedPassword = bcrypt.hashSync(password,salt)
    console.log("New--->" + hashedPassword)
    const user = await UserModel.findOne({email:email})
    
    if(!user){
        res.send({err:"No Such User"})
    }
    else if(user.password !== hashedPassword ){
        res.send({err : "Incorrect Password"})
        
    }
    else if(user.password === hashedPassword){
        res.send({success : "Logged in"})
    }
    else{
        res.send({err : "Internal Server Error"})
    }

}

module.exports =  authLogin;