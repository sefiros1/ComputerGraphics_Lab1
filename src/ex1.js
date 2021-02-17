"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
var path = require("path");
var input = [];
var inputCount = 7;
fs.readFileSync(path.join(__dirname, 'ex1.txt'))
    .toString('utf8').replace(/\n/g, " ").split(" ").forEach((function (n) {
    if (input.length === inputCount)
        return;
    var parsed = parseInt(n);
    if (!isNaN(parsed))
        input.push(parsed);
}));
if (input.length !== inputCount)
    throw "Invalid input";
var p1 = { x: input[0], y: input[1] };
var p2 = { x: input[2], y: input[3] };
var l = { a: input[4], b: input[5], c: input[6] };
var p1RelPos = l.a * p1.x + l.b * p1.y + l.c;
var p2RelPos = l.a * p2.x + l.b * p2.y + l.c;
if (p1RelPos === 0 && p2RelPos === 0) {
    console.log("The points are on a line");
}
else if (p1RelPos === 0 || p2RelPos === 0) {
    console.log("One of the points on the line");
}
else if (Math.sign(p1RelPos) === Math.sign(p2RelPos)) {
    console.log("Points on one side of a straight");
}
else {
    console.log("Points on opposite sides of a straight line");
}
