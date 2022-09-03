const inputDate = "2022-08";
const month = Number(inputDate.substring(5));
const dt = new Date(`${inputDate}-01`);
const week = dt.getDay();

const days = [];
let mon = dt.getMonth();

while (dt.getMonth() === month - 1) {
    days.push(dt.getDate());
    dt.setDate(dt.getDate() + 1);
}

console.log(days);

console.log(
    `일월화수목금토`
        .split("")
        .map((w) => `${w}\t`)
        .join("")
);
