const a = [1, 2],
    obj = {};
for (const [key, value] of Object.entries(a)) obj[key] = value;
// cf. Array.prototype.push.apply(obj, a); // 유사배엵객체 배열은 아닌데 배열과 유사한 타입
// cf. Array.prototype.push.call(obj, ...a); // call로 부를땐 하나씩 풀어서 줘야함

console.log(obj);

const arr = Array(1, 2, 3);

console.log(arr);

const ar2 = Array(5).fill(1); // 5개의 서랍 array를 만들어서 1을 fill로 채워라
console.log("🚀 ~ file: array.js ~ line 14 ~ ar2", ar2);
ar2.fill("X");
console.log("🚀 ~ file: array.js ~ line 15 ~ ar2", ar2);
ar2.fill("Y", 1); // 시작위치 : 1부터 채워라
console.log("🚀 ~ file: array.js ~ line 17 ~ ar2", ar2);
ar2.fill("Z", 2, 4); // 2부터 4까지 채워라 2번째 인자는 4 미만!
console.log("🚀 ~ file: array.js ~ line 19 ~ ar2", ar2);
ar2.fill(0, -4, -1); // -1은 제일 뒤에임

console.log(ar2);

console.log("------------------------------------------");

const ar3 = Array.from(arr);
console.log(ar3);

const ar4 = [...arr]; //스프레드 연산자를 써야함 요즘시대에는
console.log(ar4);

ar4[2] = "hello";
console.log(ar4);

const ar5 = Array.from([...arr, 4, 5]);
// push랑 같음

const ar6 = Array.from({ length: 5 }, (_, i) => i + 1); // 1부터 100까지를 만드세요 라는 것에 쓸 수 있음.

console.log(ar6);

const ar7 = [..."abdfdz"];

console.log(ar7);

const ar8 = [...Array(5)].map((a, i) => i + 1);

console.log(ar8);
