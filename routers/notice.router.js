var express = require('express')
const {publishnoticeController,publishnoticeonlyController} = require('../controllers/publishNotice.controller');
const multer = require('multer');
const path = require("path");
var router = express.Router()
const { v4: uuidv4 } = require('uuid');
const jwtAuthorization = require('../controllers/jwtauthorization.controller');
const cloudinarypublishnoticeController = require('../controllers/cloudinarypublishNotice');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "tmp");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        uuidv4()+ path.extname(file.originalname)
      );
    },
  });
  const storage1 = multer.memoryStorage()
  const upload = multer({ storage: storage });
  const upload1 = multer({ storage: storage1 });

router.post("/publish-notice",jwtAuthorization,upload.single('image'),publishnoticeController)
router.post("/publish",jwtAuthorization,upload1.single('image'),cloudinarypublishnoticeController)
router.post("/publish-notice-only",jwtAuthorization,publishnoticeonlyController)
module.exports = router;