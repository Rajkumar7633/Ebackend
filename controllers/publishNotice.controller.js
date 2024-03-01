const NmsNotices = require("../models/notice.model")
const express = require('express');
const userModel = require("../models/user.model");
const { sendNotice } = require("../mail");



const publishnoticeController = async (req, res) => {
    console.log("Came--->");
    const user_email = req.user_email
    const user_level = req.user_level
    if (user_level > 2) {
        return res.json({
            error: "Cannot publish notice"
        })
    }
    const { image, level, department, note, heading } = req.body
    const date = new Date().toLocaleDateString('en-US', {
        day: "numeric",
        month: "short",
        year: "numeric"
    })
    const time = new Date().toLocaleTimeString('en-US',
        { hour12: true, hour: "numeric", minute: "numeric" });
    console.log(req.file.filename)
    try {
        const data = await NmsNotices.create({
            time: time,
            date: date,
            level: level,
            department: department,
            image: (req.file.filename),
            note: note,
            heading: heading
        })
        return res.json({
            success: "done"
        })
    }
    catch (err) {
        return res.json({
            error: err.message + "--------->"
        })
    }

}
const publishnoticeonlyController = async (req, res) => {
    const user_email = req.user_email
    const user_level = req.user_level
    if (user_level > 2) {
        return res.json({
            error: "Cannot publish notice"
        })
    }
    const { image, level, department, note, heading } = req.body
    const date = new Date().toLocaleDateString('en-US', {
        day: "numeric",
        month: "short",
        year: "numeric"
    })
    const time = new Date().toLocaleTimeString('en-US',
        { hour12: true, hour: "numeric", minute: "numeric" });
    try {
        const data = await NmsNotices.create({
            time: time,
            date: date,
            level: level,
            department: department,
            image: null,
            note: note,
            heading: heading,
            from : user.username+" (" + user_email+")",
            fromdepartment : user.department
        })
        const usersToEmail = await userModel.find(
            {
                $and: [
                    {
                        $or: [
                            { department: "admin" },
                            { department: department }
                        ]
                    },
                    {
                        userlevel: {
                            $lte: level
                        }
                    }
                ]
            }
        )
        console.log(usersToEmail);
        Promise.all(usersToEmail.map(async u=>{
            const a  =  sendNotice(u.username,u.email,note,heading)
            console.log("a=");
            console.log(a);
            return""
        })).then(
            res.json({
               success: "done"
           })
        )
    }
    catch (err) {
        return res.json({
            error: err.message
        })
    }

}

module.exports = { publishnoticeController, publishnoticeonlyController };