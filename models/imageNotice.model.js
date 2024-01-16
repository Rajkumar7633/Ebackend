const mongoose = require('mongoose')
const noticeSchema = new mongoose.Schema({
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
        data: Buffer,
        contentType: String
    },
    from : {
        type : String
    },
    fromdepartment:{
        type : String
    }
});
module.exports = mongoose.model("Notices", noticeSchema);