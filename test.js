for (let i = 0.1; i < 1; i = (i * 10 + 0.1 * 10) / 10) {
    console.log(i);
}

function toValidFloat(a, b, length) {
    const po = Math.pow(10, length);
    return (a * po + b * po) / po;
}

console.log(toValidFloat(0.21354, 0.1, 5));

const ab = [1, 2, 3, 4, 5];
let [a1, b2, ...c1] = ab;
console.log(c1);

console.log(0.14 + 0.28, 0.14 * 100);

// arr 이 엄청 큰 배열이며, 가변적이라고 한다면 먼저 선언해주기
// const al = arr.length
// for (let i = 0; i < arr.length; i++) { … }
// for (let i = 0; i < al; i++) { … } // 미리 선언해주고 쓰기
// for (let i = 0; i < fn(); i++) { … }

for (let i = 0.1; i < 1; i = (i * 10 + 0.1 * 10) / 10) {
    console.log(i);
}

function addNum(a, b, length) {
    const po = Math.pow(10, length);
    console.log((a * po + b * po) / po);
}

addNum(0.14, 0.28, 5);

// ex1
for (let i = 2; i < 11; i += 1) {
    const x = Math.sqrt(i).toFixed(3);
    if (!Number.isInteger(x)) {
        console.log(i, x);
    }
}

// ex2
const today = new Date();
const dayLabel = today.getDay();
console.log(dayLabel);

const dayLabel2 = ["일", "월", "화", "수", "목", "금", "토"];

const day2 = () => {
    console.log(`오늘은 ${dayLabel2[dayLabel]}요일입니다.`);
};

day2();

switch (dayLabel) {
    case 0:
        console.log("굿모닝 일요일😎");
        break;
    case 1:
        console.log("굿모닝 월요일😎");
        break;
    case 2:
        console.log("굿모닝 화요일😎");
        break;
    case 3:
        console.log("굿모닝 수요일😎");
        break;
    case 4:
        console.log("굿모닝 목요일");
        break;
    case 5:
        console.log("굿모닝 금요일😎");
        break;
    case 6:
        console.log("굿모닝 토요일😎");
        break;
    default:
        console.log(`Sorry, 오늘은 아무날도 아니야.`);
}

const weekName = "일월화수목금토일"[dayLabel]; // str이 배열을 만나면 배열로 변한다.
console.log(`오늘은 ${weekName} 입니다.`); // 바뀔 부분을 먼저 적어놓고 프로블럼을 없애자.
console.log(`오늘은 ${"일월화수목금토일"[new Date().getDay()]}`); // 한 줄로 표현하고 싶을 때
