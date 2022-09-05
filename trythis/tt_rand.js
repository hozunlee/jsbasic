import { rand } from "../utils/math-utils.js";

console.log("rand(1, 10) :>> ", rand(1, 10)); // 1 ~ 10 사이의 난수
console.log("rand(1, 10) :>> ", rand(0, 9)); // 0 ~ 9 사이의 난수
console.log("rand(1, 10) :>> ", rand(100, 200)); // 100 ~ 200 사이의 난수
