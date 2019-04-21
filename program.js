// let sum = 0;
// for (let i = 2; i < process.argv.length; i++) {
//     sum += Number(process.argv[i]);
// }
// console.log(sum);

// my-first-async-io
// ========================
// const fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', function (err, data) {
//     console.log(data.split('\n').length - 1);
// });

// Making filtered-ls utility modular
// =====================================
// const filteredls = require('./my-filtered-ls');
// const directory = process.argv[2];
// const extName = process.argv[3];
// filteredls(directory, extName, function (err, list) {
//     if (err) {
//         return 'It was an error' + console.err(err);
//     }
//     list.forEach(element => {
//         console.log(element);
//     });
// });

// Basic Http client server
// const http = require('http');
// // console.log(process.argv[2]);
// http.get(process.argv[2], (res) => {
//     res.setEncoding('utf8');
//     res.on('data', (d) => {
//         console.log(d);
//     });
//     res.on('error', console.error);
// }).on('error', console.error);

// http-collect
const bl = require('bl');
const http = require('http');
const url = process.argv[2].toString();

http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});