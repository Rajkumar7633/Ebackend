const NmsNotices = require("../models/notice.model")
const express = require('express')



const publishnoticeController = async( req,res)=>{
    const user_email = req.user_email
    const user_level = req.user_level
    if(user_level >2){
        return res.json({
            error : "Cannot publish notice"
        })
    }
    const {image,level,department,note,heading} = req.body
    const date = new Date().toLocaleDateString('en-US', {
        day: "numeric",
        month: "short",
        year: "numeric"
    })
    const time = new Date().toLocaleTimeString('en-US',
        { hour12: true, hour: "numeric", minute: "numeric" });
        console.log(req.file.filename)
    try{const  data = await NmsNotices.create({
        time:time,
        date : date,
        level : level,
        department : department,
        image : ( req.file.filename),
        note : note,
        heading : heading
    })
    return res.json({
        success : "done"
    })
}
    catch(err){
        return res.json({
            error : err.message + "--------->"
        })
    }

}
const publishnoticeonlyController = async(req,res)=>{
    const user_email = req.user_email
    const user_level = req.user_level
    if(user_level >2){
        return res.json({
            error : "Cannot publish notice"
        })
    }
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
        image : null,
        note : note,
        heading : heading
    })
    return res.json({
        success : "Done :-)"
    })
}
    catch(err){
        return res.json({
            error : err.message
        })
    }

}

module.exports =  {publishnoticeController,publishnoticeonlyController};