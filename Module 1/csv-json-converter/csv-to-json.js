const fs = require("fs");
const path = require("path");

csvToJson = function(filePath, callback, outputPath = "converted.json") {
  console.log(`Converting ${path.basename(filePath)} to JSON`);

  if (fs.existsSync(filePath)) {
  } else {
    callback();
  }

  return;
};

csvToJson(path.join(__dirname, "customer-data.csv"));
