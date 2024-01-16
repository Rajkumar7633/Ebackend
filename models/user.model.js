var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userModel = new Schema({
    username : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    uid : {
        type : Number,
        require : true
    },
    department : {
        type : String,
        enum : ['admin','engineering','hostel']
    },
    role : {
        type : String,
        enum : ['admin','dean','head','ward','student','teacher','caretaker']
    },
    userlevel :{
        type: Number
    }
    


})

module.exports =  mongoose.model('Users',userModel)