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
function getVectorByPoints(a, b) {
    return { x: b.x - a.x, y: b.y - a.y };
}
function getLineByPoints(a, b) {
    return { a: a.y - b.y, b: b.x - a.x, c: a.x * b.y - b.x * a.y };
}
function func(a, b) {
    return a.a * b.x + a.b * b.y + a.c;
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
var ba = getVectorByPoints(b, a);
var ba_l = getLineByPoints(b, a);
// console.log(JSON.stringify(ba_l));
// console.log(ba_l.a*c.x + ba_l.b*c.y + ba_l.c)
var ba_left = func(ba_l, d) >= 0;
var bc_l = getLineByPoints(b, c);
var bc_right = func(bc_l, d) <= 0;
console.log(ba_left);
console.log(bc_right);
if (!ba_left && !bc_right) {
    console.log("No");
}
else if (ba_left && bc_right) {
    console.log("Yes");
}
else {
    if (!ba_left) {
        var sa = Math.sign(func(bc_l, a));
        var sd = Math.sign(func(bc_l, d));
        if (sa !== 0 && sa + sd === 0)
            console.log('Yes');
        else
            console.log('No');
    }
    else if (!bc_right) {
        var sc = Math.sign(func(bc_l, c));
        var sd = Math.sign(func(bc_l, d));
        if (sc !== 0 && sc + sd === 0)
            console.log('Yes');
        else
            console.log('No');
    }
}
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
