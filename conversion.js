const n = 100;
let s1 = n.toString();
let s2 = n + " ";

console.log(s1, typeof s1, s2, typeof s2);

const binary = n.toString(2);
console.log(binary, n.toString(8));

const d1 = Date();
const d2 = new Date();

console.log(d1, d2, typeof d1, typeof d2);
// timestamp 를 사용해야 정확함

const u = { id: 1, name: "hong" };
console.log("🚀 ~ file: conversion.js ~ line 18 ~ u", u);

const x = 5;

const q = x * "30";
console.log(q);

let a = 1,
    b = 2;
let c = (a++, b++);
console.log(a, b, c);

const T = true;
const F = false;

let x1 = 1;
console.log(T || x1++, F || x1++, x1);
console.log(T && x1++, F && x1++, x1);

function fx(x) {
    // x를 안줬을 때 0이라고 해
    return (x || 0) * 0.1;
}

let a1 = 0b1010,
    b1 = 0b1100; // cf. 8진수(0o), 16진수(0x)
console.log(a1 & b1, a1 | b1, a1 ^ b1, ~b1);
// 2진수로 변환하려면 toString(2)를 사용하라
console.log((a1 & b1).toString(2), (a1 | b1).toString(2), a1 ^ b1, ~b1);

const R = 1,
    W = 2,
    E = 4; // 0b001, 0b010, 0b100
let auth = parseInt("011", 2); // 0b011
const hasWriteAuth = auth & W; // 011 & 010 ⇒ 010
const hasExeAuth = auth & E; // 0b011
const hasReadAndExeAuth = auth & (R | E); // 0b011
auth = auth ^ E;

console.log(auth.toString(2));

console.log((0.234).toFixed(2)); // . 도 연산자임 그래서 () 가 작동함

let f = 2.345;
console.log(Math.trunc(f) === Math.floor(f)); // 2, 2 로 같아보이지만
//floor는 절삭임
// trunc는 그냥 버리는 거임
f = -2.345;
console.log(Math.trunc(f), Math.floor(f)); // 음수로 가면 절삭이기때문에 다르값이 나오게 됨

console.log(2.4 % 1, 2.4 % 1 === 0.4);
