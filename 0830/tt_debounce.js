//Debounce를 이용해서 rand함수를 n번 호출 (1초 동안 몇번?)

const rand = (s, e) => console.log(s + Math.floor((e - s + 1) * Math.random()));

const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args); // cb(...args) ⇒ cb(100)
    };
};
const act = debounce((a, b) => rand(a, b), 1000);
const r = act(100, 120);

let cnt = 0;
const cntDebounce = setInterval(() => {
    act(100, 120);
    cnt++;
    if (cnt === 20) clearInterval(cntDebounce);
}, 100);

///////////////////

const throttle = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) return;
        timer = setTimeout(() => {
            cb(...args);
            timer = null;
        }, delay);
    };
};

const act1 = throttle((a, b) => rand(a, b), 1000);
const r1 = act(100, 120);
