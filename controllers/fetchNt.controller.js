const UserModel = require('../models/user.model')
const NoticeModel = require('../models/notice.model')
const fetchNtController = async (req,res) =>{
//    const { email } = req.body
     const email = req.params.email
   let user
   try{
    user = await UserModel.findOne({email: email})
    }
   catch(err){
    return res.status(400).send({error : err.message})
   }
   if(!user){
    return res.status(400).send({error : err.message})
   }

    try{
        if(user.department === 'admin'){
            const adminNt = await NoticeModel.find({})
            // adminNt.map(n=>               
            //      (...n, imgurl : n.image.data.toString('base64'))
            // // )
            // for(let i = 0;i<adminNt.length;i++){
            //     // console.log('---->');
            //     // console.log(adminNt[i].image.data.toString('base64'))
            //     adminNt[i].imgurl = adminNt[i].image.data.toString('base64')
            //  }
            // let re = []
            //  for(let i = 0;i<adminNt.length;i++){
            //     console.log('---->');
            //     var temp = adminNt[i].image.data.toString('base64')
            //     let mp  = {
            //         imgurl : temp
            //     }
            //     re.push(mp)
            //     console.log(adminNt[i].imgurl ?"true":"false")
            //     // adminNt[i].imgurl = adminNt[i].image.data.toString('base64')
            //  }
            return res.status(200).json(adminNt)
        }
        const nt = await NoticeModel.find({
    $and:[
        {   $or:[
                {department : "all"},
                {department : user.department}
            ]
        },
        {
            level : {
                $gte : user.userlevel
            }
        }
    ]
   })
   for(let i = 0;i<nt.length;i++){
       console.log('---->');
       console.log(nt[i].image.data.toString('base64'))
    }
   
//    console.log(nt);
   res.status(200).json(nt)

}
catch(err){
    res.status(400).json({
        error : err.message
    })
}

}

module.exports = fetchNtController