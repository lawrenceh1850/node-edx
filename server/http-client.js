const https = require("https");
const http = require("http");
const url = "https://jsonplaceholder.typicode.com/";

// let statusCode = "200";
let path = "posts/1";

console.log(`${url + path}`);

let ret = "";

// http
//   .get(url + path, response => {
//     console.log("----- START OF MESSAGE -----\n");
//     response.on("data", chunk => {
//       ret += chunk.toString("utf8");
//     });
//     response.on("end", () => {
//       console.log("----- END OF MESSAGE -----");

//       try {
//         const parsed = JSON.parse(ret);
//         console.log(parsed);
//       } catch (err) {
//         console.error(e.message);
//       }
//     });
//   })
//   .on("error", error => {
//     console.error(`Got error ${error.message}`);
//   });

const postData = JSON.stringify({ foo: "bar" });

const options = {
  hostname: "mockbin.com",
  port: 80,
  path: "/request?foo=bar&foo=baz",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(postData)
  }
};

const req = http.request(options, res => {
  res.on("data", chunk => {
    console.log(`BODY: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data in response.");
  });
});

req.on("error", e => {
  console.error(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();
