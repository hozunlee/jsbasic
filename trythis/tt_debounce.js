//Debounce를 이용해서 rand함수를 n번 호출 (1초 동안 몇번?)
import { rand } from "../utils/math-utils.js";
import { debounce, throttle } from "../utils/timer-utils.js";

// const rand = (s, e) => console.log(s + Math.floor((e - s + 1) * Math.random()));

const act = debounce(rand, 1000);
const act1 = throttle(rand, 1000);

let cnt = 0;
const intl = setInterval(() => {
    cnt += 1;
    act(100, 120);
    act1(1000, 2000);
    if (cnt === 20) clearInterval(intl);
}, 100);
