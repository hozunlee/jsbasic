const afterTime = (sec) => {
    console.log("afterTime>>", sec);
    if (sec < 1 || sec > 3)
        return Promise.reject(new Error("Not valid sec range!!"));
    return new Promise((resolve) => setTimeout(resolve, sec * 1000, sec + 4));
};
console.time("timetime");
const odds = (
    await Promise.all(
        [1, 2, 3].map((val) => {
            const r = afterTime(val);
            console.log(r);
            return r;
        })
    )
).filter((res) => res % 2 === 1);
console.log("odds=", odds);
console.timeEnd("timetime");
// 한줄로 써보기
// (await Promise.all([1,2,3].map(afterTime).filter( a => a % 2 === 1)))
