const mongoose = require('mongoose') ;

const Schema = new mongoose.Schema({type : {
    type:{
        type:String , 
        enum : ['information' , 'warn' , 'error' , 'success'] ,
        required: true 
    } ,
    message:{
        type:String ,
        required:true 
    } ,
    timestamp:{
        type:String,
    }
}})

module.exports = mongoose.model('Log',Schema);