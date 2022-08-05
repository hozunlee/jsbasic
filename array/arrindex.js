const arr = [1, 2, 3, 2, 3];

console.log("arr.indexOf(3) :>> ", arr.indexOf(3));
console.log("arr.indexOf(5) :>> ", arr.indexOf(5));
console.log("arr.indexOf(5) :>> ", arr.indexOf(3, 3));

// 요소의 존재 여부를 확인할 때는 includes를 사용하자
console.log("arr.includes(1) :>> ", arr.includes(1));

const orr = [{ id: 1 }, { id: 231 }, { id: 112 }];

console.log(
    "orr.findIndex((a, i)=> a.id === 1) :>> ",
    orr.findIndex((a, i) => a.id === 1)
);
// console.log(
//     "orr.findLastIndex((a, i)=> a.id === 1) :>> ",
//     orr.findLastIndex((a, i) => a.id === 1)
// );

//TODO 배열 루프와 찾기

for (let user of orr) {
    console.log(user);
}

orr.forEach((item, i) => {
    console.log(item.id, i);
});

const ax = orr.map((user, idx) => user.id);
console.log(ax);

const bx = orr.filter((user, idx) => user.id > 1);
console.log(bx);

const cx = orr.find((user, idx) => user.id === 1);
console.log(cx);

console.log(
    "arr.some((a, idx) => a === 1);",
    arr.some((a, idx) => a === 1)
);
console.log(
    "arr.some((a, idx) => a === 1);",
    arr.some((a) => a === 5)
);
console.log(arr.every((a) => a > 0));
console.log(arr.every((a) => a % 2 === 0));

//TODO 배열 요소 & 합치기
const aa = [1, 2, 3];
console.log(aa.join(", "));

const a77 = [7, 8];
const a88 = [1, 2, ...a77];
console.log("a88 :>> ", a88);

console.log("a88.concat(a77) :>> ", a88.concat(a77)); //순수
console.log("[...a77, ...a88] :>> ", [...a77, ...a88]); // 순수
