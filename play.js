const { copyFileSync } = require("fs");
const setupInput = require("./input");
const connect = require('./client');





console.log("Connecting ...");

setupInput(connect());


module.exports = connect;


// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)