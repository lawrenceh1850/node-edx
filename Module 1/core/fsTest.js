const fs = require("fs");
const path = require("path");

fs.readFile("test.html", { encoding: "utf-8" }, (err, data) => {
  if (err) return console.error(err);
  console.log(data);
  return data;
});

fs.writeFile(path.join(__dirname, "message.txt"), "Hello World!", function(
  error
) {
  if (error) return console.error(error);
  console.log("Writing is done.");
});
