var express = require('express')
const mongoose = require('mongoose')



const verifyEmail = require("../controllers/register.controller")
const verifyOtp = require("../controllers/verifyotp.controller");
const  authLogin  = require('../controllers/authLogin.controller');
const publishnoticeController = require('../controllers/image.controller')
const fetchNoticeController = require('../controllers/fetchNotice.controller');
const fetchNtController = require('../controllers/fetchNt.controller');

const router = express.Router();


router.post('/register',verifyEmail)
router.post('/verifyotp',verifyOtp)
router.post('/login',authLogin)
router.post('/publishnotice',publishnoticeController)
router.get('/fetchnotice/:email',fetchNtController)
// router.get('/fetchnotice/:email',fetchNoticeController)



module.exports = router;