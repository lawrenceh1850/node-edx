const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    console.log(`${req.method} request recieved for resource at "${req.url}" 
      with headers:${req.headers}\n`);

    if (req.method === "POST") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Info posted to server successfully");
    } else {
      if (req.url === "/personalData") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(`{
              "name": "Larry H",
              "DOB": "${new Date(1999, 8, 2).toJSON()}",
              "Location": "unknown"
          }`);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
          `<html>
        <head>
        <title>Welcome to Larry H's server!</title>
        </head>
        <body>
        This is the ${req.url} page
        </body>
        </html>`
        );
      }
    }
  })
  .listen(port);
