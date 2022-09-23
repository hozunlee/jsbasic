import { LINE2 } from "../localData.js";

class Subway {
    // 데이터가 무한대에 가까울 때 사용하기 위함임 (순환)
    constructor(start, end) {
        // startIdx 등으로 변화해서 쓰는건 안좋음
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        // slice를 쓰지 않는 건 새로운 array를 만드는것을 방지한다.
        let idx = LINE2.indexOf(this.start) - 1;
        let done = false;
        return {
            next: () => {
                // 화살표함수를 사용한 이유는 done에 this.end를 쓰기 위해서
                idx = idx === LINE2.length - 1 ? 0 : idx + 1;
                done = done || LINE2[idx - 1] === this.end;
                return { value: done ? undefined : LINE2[idx], done };
            },
        };
    }
}

const routes = new Subway("신도림", "신도림");
const it1 = routes[Symbol.iterator]();
console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '대림', done: false }
console.log(it1.next()); // { value: '구로디지털단지', done: false }
console.log(it1.next()); // { value: '신대방', done: false }
console.log(it1.next()); // { value: '신림', done: false }
console.log(it1.next()); // { value: undefined, done: true }

const routes2 = new Subway("구로디지털단지", "성수");
console.log("구디", [...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]();
while (true) {
    const x = it2.next();
    console.log(x);
    if (x.done) break;
}
