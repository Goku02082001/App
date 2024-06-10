const cron = require('node-cron');
const dataService = require('./data');
const schedule = require('node-schedule');
const { log, info, error } = require('../controllers/log');

const start = () => {
    schedule.scheduleJob('0 */12 * * *', () => {
        dataService.processData();
    });

    info('Scheduler started');
    dataService.processData();
};

module.exports = { start };
