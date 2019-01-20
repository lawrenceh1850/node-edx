const http = require("https");
const url = "https://jsonplaceholder.typicode.com/";

// let statusCode = "200";
let path = "posts/1";

console.log(`${url + path}`);

http
  .get(url + path, response => {
    console.log("----- START OF MESSAGE -----\n");
    response.on("data", chunk => {
      console.log(chunk.toString("utf8"));
    });
    response.on("end", () => {
      console.log("----- END OF MESSAGE -----");
    });
  })
  .on("error", error => {
    console.error(`Got error ${error.message}`);
  });
