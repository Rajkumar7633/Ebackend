const UserModel = require('../models/user.model')
const NoticeModel = require('../models/imageNotice.model')
const fetchNoticeController = async (req,res) =>{
   const { email } = req.body
   
   const user = await UserModel.findOne({email: email})
    try{
        console.log(user);
        console.log(email);
        console.log(user.department);
        console.log(user.userlevel);
        const nt = await NoticeModel.find({
    $and:[
        {department : user.department},
        {
        level : 
        {
            $gte : user.userlevel
        }
        }
    ]
   })
   console.log(nt);
   res.status(200).json(nt)

}
catch(err){
    res.status(400).json({
        error : err.message
    })
}

}

module.exports = fetchNoticeController