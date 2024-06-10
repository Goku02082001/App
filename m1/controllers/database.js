let logs = [
    { timestamp: '2024-06-10 10:00:00', type: 'info', message: 'Information message' },
    { timestamp: '2024-06-10 10:05:00', type: 'warn', message: 'Warning message' },
    { timestamp: '2024-06-10 10:10:00', type: 'error', message: 'Error message' },
    { timestamp: '2024-06-10 10:15:00', type: 'success', message: 'Success message' }
  ];
  
  function addLog(timestamp, type, message) {
    logs.push({ timestamp, type, message });
  }
  
  function filterLogs(type) {
    return logs.filter(log => !type || log.type === type);
  }
  
  function getAllLogs() {
    return logs;
  }
  
  module.exports = {
    addLog,
    filterLogs,
    getAllLogs
  };