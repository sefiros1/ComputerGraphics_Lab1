import * as fs from 'fs-extra';
import * as path from 'path';

type Point = { x: number; y: number; z: number}
type Line  = { a: number; b: number; c: number; d: number}

let input: Array<number> = [];
let inputCount = 10
fs.readFileSync(path.join(__dirname, 'ex4.txt'))
.toString('utf8').replace(/\n/g, " ").split(" ").forEach((n => {
    if (input.length === inputCount) return;
    let parsed = parseInt(n);
    if (!isNaN(parsed))
        input.push(parsed);
}));
if (input.length !== inputCount) throw "Invalid input";

let p1: Point = { x: input[0], y: input[1], z: input[2] }
let p2: Point = { x: input[3], y: input[4], z: input[5]  }
let l: Line = { a: input[6], b: input[7], c: input[8], d: input[9] }

let p1RelPos = l.a * p1.x + l.b * p1.y + l.c * p1.z + l.d;
let p2RelPos = l.a * p2.x + l.b * p2.y + l.c * p2.z + l.d;

if (p1RelPos === 0 && p2RelPos === 0) {
    console.log("The points are on a plane");
} else if (p1RelPos === 0 || p2RelPos === 0) {
    console.log("One of the points on the plane");
} else if (Math.sign(p1RelPos) === Math.sign(p2RelPos)){
    console.log("Points on one side of a plane");
} else {
    console.log("Points on opposite sides of a plane");
}