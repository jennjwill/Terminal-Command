const fs = require("fs");

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, "");

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  const data = new Uint8Array(Buffer.from("Hello Node.js"));
  fs.writeFile("fileName", data, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

module.exports.mkdir = () => {
  fs.mkdir("./dirName", { recursive: true }, err => {
    if (err) throw err;
    console.log("The dir has been created");
  });
};
