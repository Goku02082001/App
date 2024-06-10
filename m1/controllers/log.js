const fs = require('fs') ;
const path = require('path') ; 
const Log = require('../models/Logs') ;
const { timeStamp } = require('console');
 const logFilePath = process.env.LOG_FILE_PATH ;

 const log = (type , message) =>{
    const logEntry = new Log({type , message, timeStamp:new Date()}) ;
    logEntry.save();

    const logMessage = `[${new Data().tolSOString() }] [${type.toUpperCase()}] ${message}\n` ;
    fs.appendFileSync(logFilePath, logMessage) ;
 
 } ;
 module.exports = {log} ;