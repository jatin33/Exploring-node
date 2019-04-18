// let sum = 0;
// for (let i = 2; i < process.argv.length; i++) {
//     sum += Number(process.argv[i]);
// }
// console.log(sum);

// my-first-async-io
// const fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', function (err, data) {
//     console.log(data.split('\n').length - 1);
// });

const filteredls = require('./my-filtered-ls');
const directory = process.argv[2];
const extName = process.argv[3];

filteredls(directory, extName, function (err, list) {
    if (err) {
        return 'It was an error' + console.err(err);
    }
    list.forEach(element => {
        console.log(element);
    });
});