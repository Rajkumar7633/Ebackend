const express = require('express')
const jwtAuthorization = require('../controllers/jwtauthorization.controller')
const router = express.Router()

router.get('/authorize',jwtAuthorization,(req,res)=>{
    const user_email = req.user_email
    const user_level = req.user_level
    return res.status(400).json({
        level : user_level
    })

})

module.exports = router