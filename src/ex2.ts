import * as fs from 'fs-extra';
import * as path from 'path';

type Point = { x: number; y: number; }

let input: Array<number> = [];
let inputCount = 8
fs.readFileSync(path.join(__dirname, 'ex2.txt'))
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

// r1 - Ray [A,B)
let r1_dx = b.x - a.x;
let r1_dy = b.y - a.y;
// r2 = Rau [C,D)
let r2_dx = d.x - c.x;
let r2_dy = d.y - c.y;

// 1 way: the rays are co-directed
let areRaysCoDirected = (Math.sign(r1_dx) === Math.sign(r2_dx) && Math.sign(r1_dy) === Math.sign(r2_dy))

// 2 way: the rays aren't co-directed
//        but [A,B) and [A,C) are co-directed
//        ( means C in [A,B) )
let anotherBoolean = (Math.sign(r1_dx) === Math.sign(c.x - a.x) && Math.sign(r1_dy) === Math.sign(c.y - a.y))

if (areRaysCoDirected || anotherBoolean) {
    console.log("the rays intersect")
} else {
    console.log("the rays do not intersect")
}