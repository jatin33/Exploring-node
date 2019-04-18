const fs = require('fs');
const path = require('path');
const extName = '.' + process.argv[3];
fs.readdir(process.argv[2], function (err, list) {
    if (err) return console.error(err);
    const textFiles = list.reduce((acc, curr) => {
        if (path.extname(curr) === extName) {
            acc.push(curr);
        }
        return acc;
    }, []);
    console.log(textFiles.join('\n'));
});