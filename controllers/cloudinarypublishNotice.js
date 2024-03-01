const NmsNotices = require("../models/notice.model")
const UserModel = require("../models/user.model")
// const express = require('express')
const { v4: uuidv4 } = require('uuid');
const path = require("path");

const cloudinary = require('cloudinary').v2;
const Datauri = require('datauri')
const DatauriParser = require("datauri/parser");
const { sendNotice } = require("../mail");
require('dotenv').config()
// const app = express();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOULD_NAME,
    api_key: process.env.CLOULD_KEY,
    api_secret: process.env.CLOULD_SECRET
});

const cloudinarypublishnoticeController = async (req, res) => {
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
    console.log(req.file.path);
    console.log(__dirname + "/tmp/" + req.file.filename);
    console.log(req.file.originalname);
    try {
        const user = await UserModel.findOne({email:user_email})
        // const dUri = new Datauri();
        // const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
        // const parser = new DatauriParser();
        // const file1 = parser.format(
        //     path.extname(req.file.originalname).toString(),
        //     req.file.buffer
        // ).content;
        // const file = dataUri(req).content;
        // console.log(file1)
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const result = await cloudinary.uploader.upload(dataURI,{
            resource_type: "auto",
          });
        console.log(result.url);
        const imageUrl = result.secure_url;
        const data = await NmsNotices.create({
            time: time,
            date: date,
            level: level,
            department: department,
            image: imageUrl,
            note: note,
            heading: heading,
            from : user.username+" (" + user_email+")",
            fromdepartment : user.department
        })
        const usersToEmail = await UserModel.find(
            {
                $and:[
                    {   $or:[
                            {department : "admin"},
                            {department : department}
                        ]
                    },
                    {
                        userlevel : {
                            $lte : level
                        }
                    }
                ]
            }
        )
        console.log(usersToEmail);
        usersToEmail.map(async u=>{
            const a  = await sendNotice(u.username,u.email,note,heading)
            console.log("a=");
            console.log(a);
            return""
        })
         res.json({
            success: "done"
        })
    }
    catch (err) {
        return res.json({
            error: err.message + "--------->"
        })
    }

}


module.exports = cloudinarypublishnoticeController