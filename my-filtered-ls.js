const fs = require('fs');
const path = require('path');

module.exports = function (directory, fileExt, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) return callback(err);
        const textFiles = list.reduce((acc, curr) => {
            if (path.extname(curr) === '.' + fileExt) {
                acc.push(curr);
            }
            return acc;
        }, []);
        callback(null, textFiles);
    })
}