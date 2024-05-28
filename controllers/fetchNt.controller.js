const UserModel = require('../models/user.model')
const NoticeModel = require('../models/notice.model')
const fetchNtController = async (req, res) => {
    //    const { email } = req.body
    const email = req.params.email
    let user
    try {
        user = await UserModel.findOne({ email: email })
    }
    catch (err) {
        return res.status(400).json({ error: err.message + "-->" })
    }
    if (!user) {
        return res.status(400).json({ error: "User Not Found" + "<<<<" })
    }

    try {
        if (user.department === 'admin') {
            const adminNt = await NoticeModel.find({})
            return res.status(200).json(adminNt)
        }
        const nt = await NoticeModel.find({
            $and: [
                {
                    $or: [
                        { department: "all" },
                        { department: user.department }
                    ]
                },
                {
                    level: {
                        $gte: user.userlevel
                    }
                }
            ]
        })
        res.status(200).json(nt)

    }
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }

}

module.exports = fetchNtController