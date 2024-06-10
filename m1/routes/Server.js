const express = require('express') ;
const router = express.Router() ;
const Log = require('../models/Logs') ;

router.get('/logs' , async(req , res) =>{
    const {type} = req.query ;
    let logs ;
    if(type){
        logs = await Log.find({type}).sort({timestamp:-1}) ;

    }else{
        logs = await 
        Log.find().sort({timestamp:-1}) ;

    }
    res.render('logDashboard' , {logs}) ;
})

module.exports=router;