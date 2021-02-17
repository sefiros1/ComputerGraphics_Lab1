"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
var path = require("path");
var input = [];
var inputCount = 8;
fs.readFileSync(path.join(__dirname, 'ex2.txt'))
    .toString('utf8').replace(/\n/g, " ").split(" ").forEach((function (n) {
    if (input.length === inputCount)
        return;
    var parsed = parseInt(n);
    if (!isNaN(parsed))
        input.push(parsed);
}));
if (input.length !== inputCount)
    throw "Invalid input";
var a = { x: input[0], y: input[1] };
var b = { x: input[2], y: input[3] };
var c = { x: input[4], y: input[5] };
var d = { x: input[6], y: input[7] };
// r1 - Ray [A,B)
var r1_dx = b.x - a.x;
var r1_dy = b.y - a.y;
// r2 = Rau [C,D)
var r2_dx = d.x - c.x;
var r2_dy = d.y - c.y;
// 1 way: the rays are co-directed
var areRaysCoDirected = (Math.sign(r1_dx) === Math.sign(r2_dx) &&
    Math.sign(r1_dy) === Math.sign(r2_dy));
// 2 way: the rays aren't co-directed
//        but [A,B) and [A,C) are co-directed
//        ( means C in [A,B) )
var anotherBoolean = (Math.sign(r1_dx) === Math.sign(c.x - a.x) &&
    Math.sign(r1_dy) === Math.sign(c.y - a.y));
if (areRaysCoDirected || anotherBoolean) {
    console.log("the rays intersect");
}
else {
    console.log("the rays do not intersect");
}
