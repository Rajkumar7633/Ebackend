const bcrypt = require("bcryptjs");
var UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const authLogin = async (req, res) => {
    const { email, password } = req.body;
    const salt = "$2a$10$CwTycUXWue0Thq9StjUM0u"
    console.log("--->" + password)
    const hashedPassword = bcrypt.hashSync(password, salt)
    console.log("New--->" + hashedPassword)
    let user
    try {
        user = await UserModel.findOne({ email: email })
    }
    catch (err) {
        return res.status(400).send({ error: err.message })
    }
    if (!user) {
        return res.send({ error: "No Such User" })
    }
    else if (user.password !== hashedPassword) {
        return res.send({ error: "Incorrect Password" })

    }
    else if (user.password === hashedPassword) {
        const token = jwt.sign({
            email: user.email,
            level: user.userlevel
        }, process.env.JWT_KEY, {
            expiresIn: "3m"
        })
        return res.send({
            success: "Logged in",
            name : user.username,
            email: user.email,
            token: token,
            level: user.userlevel,
            department : user.department
        })
    }
    else {
        return res.send({ error: "Internal Server Error" })
    }

}

module.exports = authLogin;