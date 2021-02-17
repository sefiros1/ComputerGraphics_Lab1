"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
var path = require("path");
function scalarMultiplie(a, b) {
    return (a.x * b.x) + (a.y * b.y);
}
function vectorModule(a) {
    return Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
}
var input = [];
var inputCount = 8;
fs.readFileSync(path.join(__dirname, 'ex3.txt'))
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
var ba = { x: a.x - b.x, y: a.y - b.y };
var bc = { x: c.x - b.x, y: c.y - b.y };
var bd = { x: d.x - b.x, y: d.y - b.y };
var cosABC = scalarMultiplie(ba, bc) / (vectorModule(ba) * vectorModule(bc));
console.log("ba = " + JSON.stringify(ba));
console.log("bc = " + JSON.stringify(bc));
console.log("cosABC = " + cosABC);
console.log("acos = " + Math.acos(cosABC));
var cosABD = scalarMultiplie(ba, bd) / (vectorModule(ba) * vectorModule(bd));
console.log("cosABD = " + cosABD);
console.log("acos = " + Math.acos(cosABD));
console.log("acos custom = " + Math.acos(1));
// // B-A
// let m1 = (a.x - b.x) / (a.y - b.y);
// // C-A
// let m2 = (c.x - b.x) / (c.y - b.y);
// // B-D
// let m3 = (d.x - b.x) / (d.y - b.y);
// console.log("BA: " + m1);
// console.log("BD: " + m3);
// console.log("BC: " + m2);
// if (m1 > m3 && m2 < m3) console.log("YES")
// else console.log("NO");
// if () {
//     console.log("")
// } else {
//     console.log("")
// }
