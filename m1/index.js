require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const dataService= require('./services/data');

const app = express();


mongoose.connect(process.env.DB_CONNECT, {
    
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB:", err));


const indexRouter = require('./routes/Server');
app.use('/', indexRouter);

 
 
cron.schedule('0 * * * *', () => {
    console.log('Running data upload task...');
    dataService.Uploaddata();  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));