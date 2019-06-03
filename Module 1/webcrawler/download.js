const http = require("http");
const fs = require("fs");
const path = require("path");
const printLoadingEffect = require("../../Misc/loadingEffect.js");
const uuidv3 = require("uuid");

function processHTML(res) {
  let error;
  // check for errors
  if (res.statusCode !== 200) {
    error = new Error(`Invalid response code from URL: ${res.statusCode}`);
  } else if (!/^text\/html/.test(res.headers["content-type"])) {
    error = new Error("URL did not return HTML");
  }

  // any type of error
  if (error) {
    console.error(error);
    res.resume();
    return;
  } else {
    // write to file
    res.setEncoding("utf8");
    const folderPath = path.join(__dirname, "downloaded", uuidv3());
    const filePath = path.join(folderPath, "index.html");
    fs.mkdirSync(folderPath);
    res.on("data", chunk => {
      fs.appendFileSync(filePath, chunk);
    });
    res.on("end", () => {
      console.log("\nDone downloading");
      return;
    });
  }
}

function downloadPage(url) {
  if (typeof url === "undefined") {
    console.error("URL not specified");
    return;
  } else {
    console.log(`Commencing download of ${url}`);
    let intervalID = printLoadingEffect(".", 10, 100);
    http.get(url, res => {
      processHTML(res);
      res.on("end", () => {
        clearInterval(intervalID);
      });
    });
  }
}

const url = process.argv[2];
downloadPage(url);
