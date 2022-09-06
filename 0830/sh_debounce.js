const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args); // cb(...args) ⇒ cb(100)
    };
};

const rand = (s, e) => console.log(s + Math.floor((e - s + 1) * Math.random()));
const dbnc = debounce(rand, 1000);

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
// const th = throttle(rand, 500);

let cnt = 0;
const intl = setInterval(() => {
    dbnc(1, 10);
    // th(100, 200);
    cnt += 1;
    if (cnt === 30) {
        clearInterval(intl);
    }
}, 100);

/////////////
