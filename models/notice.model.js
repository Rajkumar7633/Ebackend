const mongoose = require('mongoose')
const mynoticeSchema = new mongoose.Schema({
    date : {
    type : String
    },
    time : {
    type : String
    },
    department : {
    type : String,
    enum : ['all','engineering','hostel']
    },
    level : {
    type : Number,
    enum : [1,2,3,4]
    },
    note :{
        type: String,
        require : true
    },
    heading: {
        type : String,
        require : true
    },
    image: {
        type : String
    },
    from : {
        type : String
    },
    fromdepartment:{
        type : String
    }
});
module.exports = mongoose.model("NmsNotices", mynoticeSchema);