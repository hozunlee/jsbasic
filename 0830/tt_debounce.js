//Debounce를 이용해서 rand함수를 n번 호출 (1초 동안 몇번?)

const rand = (s, e) => console.log(s + Math.floor((e - s + 1) * Math.random()));

const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args); // cb(...args) ⇒ cb(100)
    };
};

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
const act = debounce(rand, 1000);
// const act1 = throttle(rand, 1000);

let cnt = 0;
const intl = setInterval(() => {
    cnt += 1;
    act(100, 120);
    // act1(100, 120);
    if (cnt === 20) clearInterval(intl);
}, 100);
