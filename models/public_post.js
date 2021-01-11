const mongoose = require('mongoose');

const publicPostSchema = mongoose.Schema({
    tittle:{
        type:String,
        required:true,
        trim:true,
    },
    post:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const publicPostModel = mongoose.model('publicPostModel',publicPostSchema);

module.exports = {publicPostModel};