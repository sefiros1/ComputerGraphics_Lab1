"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
var path = require("path");
var input = [];
var inputCount = 10;
fs.readFileSync(path.join(__dirname, 'ex4.txt'))
    .toString('utf8').replace(/\n/g, " ").split(" ").forEach((function (n) {
    if (input.length === inputCount)
        return;
    var parsed = parseInt(n);
    if (!isNaN(parsed))
        input.push(parsed);
}));
if (input.length !== inputCount)
    throw "Invalid input";
var p1 = { x: input[0], y: input[1], z: input[2] };
var p2 = { x: input[3], y: input[4], z: input[5] };
var l = { a: input[6], b: input[7], c: input[8], d: input[9] };
var p1RelPos = l.a * p1.x + l.b * p1.y + l.c * p1.z + l.d;
var p2RelPos = l.a * p2.x + l.b * p2.y + l.c * p2.z + l.d;
if (p1RelPos === 0 && p2RelPos === 0) {
    console.log("The points are on a plane");
}
else if (p1RelPos === 0 || p2RelPos === 0) {
    console.log("One of the points on the plane");
}
else if (Math.sign(p1RelPos) === Math.sign(p2RelPos)) {
    console.log("Points on one side of a plane");
}
else {
    console.log("Points on opposite sides of a plane");
}
