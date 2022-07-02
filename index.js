console.log("내 이름은 이호준입니다.");
console.log("내 이름은 이호준입니다.");

const y = "hoya";

const x = `My name is
 ${y}`;

console.log(x);

const sy1 = Symbol();

a = 1;
b = a;
a = 2;
console.log(b);

let x2 = { id: "hello" };

x1 = x2;

x2.id = "바보";

console.log(x1.id);

i = 100;
i.toString();

const u = "hong";
u.age = 30; // 오브젝트 강제형 변환 이 라인까지는 age가 존재하지만 끝나는 순간 gc의 정리 대상이 됨, 의미 없는 짓
console.log(u.age);

//호이스팅
console.log(x32);
var x32 = "hello";

const a = 1,
    b = 2,
    c = 3;

console.log(4 + (4 % 2)); // 4
console.log(4 - (4 % 2)); // 4

console.log(a + (b % c) === a + (b % c));

// 우선순위 % > +&-

console.log(4 ** 2 % 2); // 0
console.log(4 ** (2 % 2)); // 1

// 우선순위 ** > %

console.log((5 * 2) % 2);
console.log(5 * (2 % 2));

// 우선순위 * & / > %

console.log(2 * 2 ** 3);

// 우선 순위 ** > * & / > % > + & -

console.log(a + (b % c) === a + (b % c)); //true
console.log(a - (b % c) === a - (b % c)); //true

const pm1 = 2 + (5 % 3) - 1;
const pm2 = 2 + (5 % 3) - 1;
console.log(pm1, pm2, pm1 === pm2 ? "%>+-" : "+- > %");

// +, - < %
