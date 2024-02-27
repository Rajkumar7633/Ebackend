const express = require('express')
const jwtAuthorization = require('../controllers/jwtauthorization.controller')
const router = express.Router()

router.post('/authorize',jwtAuthorization,(req,res)=>{
    const user_email = req.user_email
    const user_level = req.user_level
    return res.status(200).json({
        level : user_level
    })

})

module.exports = router