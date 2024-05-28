var express = require('express')



const verifyEmail = require("../controllers/register.controller")
const authLogin = require('../controllers/authLogin.controller');
const fetchNtController = require('../controllers/fetchNt.controller');
const jwtAuthorization = require('../middleware/jwtauthorization.controller');

const router = express.Router();


router.post('/register', verifyEmail)
// router.post('/verifyotp',verifyOtp)
router.post('/login', authLogin)
// router.post('/publishnotice',publishnoticeController)
router.get('/fetchnotice/:email', jwtAuthorization, fetchNtController)
// router.get('/fetchnotice/:email',fetchNoticeController)



module.exports = router;