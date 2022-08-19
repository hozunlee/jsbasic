const user = {
    "": 1, // OK
    " ": 1, // OK
    123: 1, // OK?        cf. user[123] * 10 = ?
    true: 1, // OK?        cf. user[false] = 0
    id: 1, // OK?
    id: 2, // user.id ? 2
    [`name`]: "Hong", // OK? No     cf. user[`name`] = 'Hong'; // OK
    [Symbol()]: "Hong", // OK?       cf. s = Symbol(); user[s] = 9; // OK
    "my-friends": ["Han", "Kim"], // OK?
    "0y": "000", // OK?
    getInfo: () => `${this.id}-${this.name}`, // OK?
    getInfo() {
        return `${this.id}-${this.name}`;
    }, // OK?
};

console.log(user);
console.log(Object.keys(user)); // key 출력 // symbol이 빠진다.
console.log(Reflect.ownKeys(user)); // symbol이 나온다.

user.addr = "Seoul";

// 이 키가 있는지 찾고 싶을 때
console.log("addr" in user, user.hasOwnProperty("addr"));

// symbol 이 무슨 값인지는 몰라도 찍어볼 수 있다. 유일무이한 키 값
const s = Symbol();
user[s] = "xxxx";
console.log(user[s]);
console.log(user.hasOwnProperty("id")); // 이걸 많이 씀

delete user.addr;
console.log(user.addr);

// computed property
user[`${user.id}'s name`] = `Mr. ${user.name}`; // user["2's info"]
// 기존의 값을 가지고 키와 리터럴을 다 바꾸는 것을 말함

user.addr = "busan";
//
console.log(Object.getOwnPropertyDescriptor(user, "addr"));

// user의 age의 값을 39로 주되 read Only로 정의하고자함
Object.defineProperty(user, "age", { value: 39, writable: false });
user.age = 30;
console.log(user.age); // 39

console.log(Object.keys(user), Object.values(user), Object.entries(user));

// 새로운 힙에 오브젝트 복사 ! 초기값을 줄 수 있음. 근데 무겁고...
Object.assign({}, user);

// 어싸인보단 스프레드 신텍스를 써라
const newUser = { ...user, wifi: 30 }; // 객체 뒤에 추가하고 싶은 키 값
console.log(newUser);

// 동결 시킴
console.log(Object.freeze(user));

user.id = 200; // error 안남??!
console.log(user.id); // 근데 안바뀜??! 오히려 무서움
