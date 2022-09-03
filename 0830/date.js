//1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.

const a = new Date(0).valueOf();
const b = new Date(1970, 0, 2).valueOf();

console.log(b - a / 1000);

// #2
const randomDay = (n) => {
    const arr = [];
    for (let i = 1; i <= n; i += 1) {
        const newDate1 = 1 + Math.floor(31 * Math.random());
        arr.push(new Date(`2022-08-${newDate1}`));
    }
    return arr.sort((a, b) => b - a);
};
console.log(randomDay(5));

//#3
const days = ["일", "월", "화", "수", "목", "금", "토"];
const nextYear = new Date("2023-08-30").getDay();

console.log("🚀 ~ file: date.js ~ line 15 ~ nextYear", days[nextYear]);

// #4
const now = new Date();
const next100 = new Date(now.setDate(now.getDate() + 100));
console.log("🚀 ~ file: date.js ~ line 33 ~ next100", next100);

return;
