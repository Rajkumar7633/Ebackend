const noticeModel = require('../models/imageNotice.model')
const noticecontroller = async (req, res) => {
    const mp = {
        'all': 4,
        'teacher': 3,
        'head': 2,
        'dean': 1
    }
    const { date, time, department, level, note, heading, image, from, fromdepartment } = req.body
    try {

        const notice = await noticeModel.create({
            date: date,
            time: time,
            department: department,
            level: mp[level],
            note: note,
            heading: heading,
            image: image,
            from: from,
            fromdepartment: fromdepartment
        })

        res.status(200).json(notice)
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}

module.exports = noticecontroller;