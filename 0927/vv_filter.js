const afterTime = (sec) => {
    console.log("afterTime>>", sec);
    if (sec < 1 || sec > 3)
        return Promise.reject(new Error("Not valid sec range!!"));
    return new Promise((resolve) => setTimeout(resolve, sec * 1000, sec));
};

const odds = [1, 2, 3].filter(async (val) => {
    const r = await afterTime(val);
    // console.log("결괏값", r);
    return r % 2 === 1;
});

// const res = [1, 2, 3].map(afterTime);
// const resres = await Promise.all(res);
// const resresres = resres.filter((a) => a % 2 === 1);

// console.log("🚀res", res);
// console.log("🚀 resres", resres);
// console.log("🚀 resresres", resresres);
console.log(
    "odds=",
    (await Promise.all([1, 2, 3].map(afterTime))).filter((a) => a % 2 === 1)
);
