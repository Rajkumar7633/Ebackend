var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const otpModel = new Schema({
    
    email : {
        type : String,
        require : true
    },
    
    otp : {
        type : Number,
        require : true
    }

})

module.exports =  mongoose.model('Otps',otpModel)