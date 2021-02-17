import * as fs from 'fs-extra';
import * as path from 'path';

type Point = { x: number; y: number; }
type Vector = { x: number; y: number; }

function scalarMultiplie(a: Vector, b: Vector): number {
    return (a.x * b.x) + (a.y * b.y);
}

function vectorModule(a: Vector): number {
    return Math.sqrt( Math.pow(a.x, 2) + Math.pow(a.y, 2) );
}

let input: Array<number> = [];
let inputCount = 8
fs.readFileSync(path.join(__dirname, 'ex3.txt'))
.toString('utf8').replace(/\n/g, " ").split(" ").forEach((n => {
    if (input.length === inputCount) return;
    let parsed = parseInt(n);
    if (!isNaN(parsed))
        input.push(parsed);
}));
if (input.length !== inputCount) throw "Invalid input";

let a: Point = { x: input[0], y: input[1] }
let b: Point = { x: input[2], y: input[3] }
let c: Point = { x: input[4], y: input[5] }
let d: Point = { x: input[6], y: input[7] }
 
var ba: Vector = { x: a.x - b.x, y: a.y - b.y };
var bc: Vector = { x: c.x - b.x, y: c.y - b.y };
var bd: Vector = { x: d.x - b.x, y: d.y - b.y };
var cosABC = scalarMultiplie(ba, bc) / (vectorModule(ba) * vectorModule(bc));
console.log("ba = " + JSON.stringify(ba));
console.log("bc = " + JSON.stringify(bc));
console.log("cosABC = " + cosABC);
console.log("acos = " + Math.acos(cosABC));
var cosABD = scalarMultiplie(ba, bd) / (vectorModule(ba) * vectorModule(bd));
console.log("cosABD = " + cosABD);
console.log("acos = " + Math.acos(cosABD));
console.log("acos -1 = " + Math.acos(-1));



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