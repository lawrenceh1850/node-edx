const log1 = require("./exports.js");
const log = require("./exports.js").logString;
const testData = require("./testData.json");

console.log(log1);
console.log(log);

log(testData.name);

// setTimeout(() => {
//   console.log(process.cwd());
// }, 1000);

// console.log("process.cwd(): " + process.cwd());
// console.log("__filename: " + __filename);
// console.log("__dirname: " + __dirname);
// console.log("process.pid: " + process.pid);
// console.log("process.env: ");
// console.log(process.env);

// log("helloooo");
// log("rockefeller");
// alert("hello");
