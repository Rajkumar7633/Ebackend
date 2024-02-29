const NmsNotices = require("../models/notice.model")
const express = require('express')
const { v4: uuidv4 } = require('uuid');

const cloudinary = require('cloudinary').v2;

const app = express();

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dic8en2vt',
    api_key: '132673531259988',
    api_secret: 'IxqbCZ3oEwH9KvYcpZFPqBIegxI'
});

const cloudinarypublishnoticeController = async (req, res) => {
    console.log("Came--->");
    // const user_email = req.user_email
    // const user_level = req.user_level
    // if (user_level > 2) {
    //     return res.json({
    //         error: "Cannot publish notice"
    //     })
    // }
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
    console.log(__dirname+"/tmp/"+req.file.filename);
    console.log(req.file.originalname);
    try {
        const result = await cloudinary.uploader.upload(req.file.originalname);
        console.log(result);
        const imageUrl = result.secure_url;
        const data = await NmsNotices.create({
            time: time,
            date: date,
            level: level,
            department: department,
            image: imageUrl,
            note: note,
            heading: heading
        })
        return res.json({
            success: "done"
            // image : imageUrl

        })
    }
    catch (err) {
        return res.json({
            error: err.message + "--------->"
        })
    }

}


module.exports = cloudinarypublishnoticeController