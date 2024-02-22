const NmsNotices = require("../models/notice.model")


const publishnoticeController = async(req,res)=>{
    const {image,level,department,note,heading} = req.body
    const date = new Date().toLocaleDateString('en-US', {
        day: "numeric",
        month: "short",
        year: "numeric"
    })
    const time = new Date().toLocaleTimeString('en-US',
        { hour12: true, hour: "numeric", minute: "numeric" });
    try{const  data = await NmsNotices.create({
        time:time,
        date : date,
        level : level,
        department : department,
        image : ( req.file.filename),
        note : note,
        heading : heading
    })
    res.json({
        success : "done"
    })
}
    catch(err){
        res.json({
            error : err.message
        })
    }

}

module.exports =  publishnoticeController;