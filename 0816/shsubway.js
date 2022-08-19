const LINE2 = [
    "신도림",
    "성수",
    "신설동",
    "용두",
    "신답",
    "용답",
    "시청",
    "충정로",
    "아현",
    "이대",
    "신촌",
    "공항철도",
    "홍대입구",
    "합정",
    "당산",
    "영등포구청",
    "문래",
    "대림",
    "구로디지털단지",
    "신대방",
    "신림",
    "봉천",
    "서울대입구",
    "낙성대",
    "사당",
    "방배",
    "서초",
    "교대",
    "강남",
    "역삼",
    "선릉",
    "삼성",
    "종합운동장",
    "신천",
    "잠실",
    "잠실나루",
    "강변",
    "구의",
    "건대입구",
    "뚝섬",
    "한양대",
    "분당선",
    "왕십리",
    "상왕십리",
    "신당",
    "동대문역사문화공원",
    "을지로4가",
    "을지로3가",
    "을지로입구",
];

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

const routes = new Subway("문래", "신림");
const it1 = routes[Symbol.iterator]();
console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '신림', done: false }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }
console.log(it1.next()); // { value: undefined, done: true }

const routes2 = new Subway("구로디지털단지", "성수");
console.log("구디", [...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]();
while (true) {
    const x = it2.next();
    console.log(x);
    if (x.done) break;
}
