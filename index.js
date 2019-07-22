const myLibrary = require("./my-library");
const uuid = require("uuid");
const newUuid = uuid();
const terminalCommands = require("./terminal-commands");

myLibrary.myFirstMethod();
terminalCommands.ls();
terminalCommands.touch();
terminalCommands.mkdir();

console.log("your new Universally unique identifier is ${newUuid}");
