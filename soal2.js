const fs = require('fs');
const sampleLog = require('./logging')

// Write Log Function
const writeLog = () => {
    fs.writeFile('log.txt', sampleLog, (err) => {
        if (err) {
            console.error('Failed to write log:', err);
        }
        console.log('Successfully write log file')
    });
}

// Read Log Function
const readLog = () => {
    fs.readFile('log.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('Failed to read log:', err);
            return;
        }
        console.log('Successfully read log file\n', data)
    });
}

writeLog();
readLog();
