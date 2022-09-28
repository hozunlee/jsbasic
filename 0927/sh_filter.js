const afterTime = (sec) => {
    console.log("afterTime>>", sec);
    if (sec < 1 || sec > 3)
        return Promise.reject(new Error("Not valid sec range!!"));
    return new Promise((resolve) => setTimeout(resolve, sec * 1000, sec));
};

const odds = [1, 2, 3].filter(async (val) => {
    const r = await afterTime(val);
    console.log(r);
    return r % 2 === 1;
});
console.log("odds=", odds);

const r1 = [1, 2, 3].map(afterTime);

const r2 = await Promise.all(r1);

console.log(r2.filter((a) => a % 2 === 1));
