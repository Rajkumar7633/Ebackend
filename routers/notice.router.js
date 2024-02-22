var express = require('express')
const publishnoticeController = require('../controllers/publishNotice.controller');
const multer = require('multer');
const path = require("path");
var router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "static");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage: storage });

router.post("/publish-notice",upload.single('image'),publishnoticeController)
module.exports = router;