import * as fs from 'fs-extra';
import * as path from 'path';

type Point = { x: number; y: number; }
type Vector = { x: number; y: number; }
type Line  = { a: number; b: number; c: number; }

function scalarMultiplie(a: Vector, b: Vector): number {
    return (a.x * b.x) + (a.y * b.y);
}

function vectorModule(a: Vector): number {
    return Math.sqrt( Math.pow(a.x, 2) + Math.pow(a.y, 2) );
}

function getVectorByPoints(a: Point, b: Point): Vector {
    return { x: b.x - a.x, y: b.y - a.y }
}

function getLineByPoints(a: Point, b: Point): Line {
    return { a: a.y - b.y, b: b.x - a.x, c: a.x*b.y - b.x*a.y }
}

function func(a: Line, b: Point): number {
    return a.a*b.x + a.b*b.y + a.c;
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
 
var ba: Vector = getVectorByPoints(b, a);
var ba_l: Line = getLineByPoints(b, a);
// console.log(JSON.stringify(ba_l));
// console.log(ba_l.a*c.x + ba_l.b*c.y + ba_l.c)
var ba_left: boolean = func(ba_l, d) >= 0
var bc_l = getLineByPoints(b, c);
var bc_right: boolean = func(bc_l, d) <= 0
console.log(ba_left);
console.log(bc_right)
if (!ba_left && !bc_right){
    console.log("No");
} else if (ba_left && bc_right){
    console.log("Yes");
} else {
    if (!ba_left) {
        let sa = Math.sign(func(bc_l, a));
        let sd = Math.sign(func(bc_l, d));
        if (sa !== 0 && sa+sd === 0)
            console.log('Yes');
        else console.log('No');
    } else if (!bc_right) {
        let sc = Math.sign(func(bc_l, c));
        let sd = Math.sign(func(bc_l, d));
        if (sc !== 0 && sc+sd === 0)
            console.log('Yes');
        else console.log('No');
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