import { debounce, throttle } from "../utils/timer-utils";

const $btn1 = document.getElementById("btn1");
const $btn2 = document.getElementById("btn2");
const $text1 = document.getElementById("text1");
const $text2 = document.getElementById("text2");

const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };

const WEEKS = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeek = (() => {
    let widx = {};
    return function (id) {
        console.log(widx);
        if (widx[id] === undefined) {
            //idxObj.hasOwnProperty(id) // 있는지 확인
            widx[id] = -1;
        }
        widx[id] += 1;
        if (widx[id] >= WEEKS.length) widx[id] = 0;
        console.log(id);
        return `${WEEKS[widx[id]]}요일`;
    };
})();
// 순수함수를 짜기 위한 클로저 생성

// 5번 caller 함수 짜보기

function handleToDoClick(event) {
    if (event.srcElement.id === "btn1") {
        getNextWeek($text1); //2
        $text1.innerText = getNextWeek(event.srcElement.id); //4
        console.log(btn1.innerText); //dom 사용
        console.log(event.srcElement.id);
    } else if (event.srcElement.id === "btn2") {
        $text2.innerText = getNextWeek(event.srcElement.id); // dom 사용
    }
}

const thrt = throttle(() => ($text2.innerText = getNextWeek()), 500);

// window.addEventListener("load", () => {});

//기존코드
// $btn1.addEventListener("click", handleToDoClick);
// $btn2.addEventListener("click", handleToDoClick);

$btn2.addEventListener("click", () => {
    thrt();
});

//TODO 함수에 접속 할 때 다른 렉시컬환경을 만들자

// 클로저를 사용할 이유가 있을까?

const getNextWeeks1 = (() => {
    return ($sp) => {
        const curr = $sp.innerText.trim().replace("요일", "");
        console.log(curr);
        let currIdx = WEEKS.indexOf(curr);
        console.log(currIdx);
        currIdx += 1;
        if (currIdx >= WEEKS.length) currIdx = 0;
        $sp.innerText = `${WEEKS[currIdx]}요일`;
    };
})();

const getNextWeek2 = (subject) => {
    if (subject === "국어") {
        let widx = -1;
        return function () {
            widx += 1; // side-effect!
            if (widx >= WEEKS.length) widx = 0;
            return `${WEEKS[widx]}요일`;
        };
    } else if (subject === "수학") {
        let widx = -1;
        return function () {
            widx += 1; // side-effect!
            if (widx >= WEEKS.length) widx = 0;
            return `${WEEKS[widx]}요일`;
        };
    }
};

// const getNextWeek3 = () => {
//     const increase = function (sub) {
//         let widx = -1;
//         return function () {
//             if (widx >= WEEKS.length) widx = 0;
//             return ++widx;
//         };
//     };
//     return function (sub) {
//         console.log("🚀 ~ file: btnfn.js ~ line 56 ~ sub", sub);
//         let b = increase(sub);
//         let c = b(sub);
//         console.log(c);
//         if (b >= WEEKS.length) widx = 0;
//         return `${WEEKS[c]}요일`;
//     };
// };

// const getNextWeek4 = () => {
// const widx = [];
//     const increase = function (sub) {
//         console.log("🚀 ~ file: btnfn.js ~ line 47 ~ increase ~ sub", sub);
//         switch (sub) {
//             case "국어":
//                 let widx = -1;
//                 break;
//             case "수학":
//         }
//         return function () {
//             if (widx >= WEEKS.length) widx = 0;
//             return widx++;
//         };
//     };
//     return function (sub) {
//         if (!widx.includes(sub)) {
//             widx.push(sub);
//         }
//         console.log(widx);
//         widx += 1;
//         if (widx >= WEEKS.length) widx = 0;
//         return `${WEEKS[widx]}요일`;
//     };
// };

const getNextWeek5 = () => {
    let widx = -1;
    const increase = function (sub) {
        console.log("🚀 ~ file: btnfn.js ~ line 47 ~ increase ~ sub", sub);
        console.log(widx);
        if (sub == widx[0])
            return function () {
                if (widx >= WEEKS.length) widx = 0;
                return widx++;
            };
    };
    return function (sub) {
        if (!widx.includes(sub)) {
            widx.push(sub);
        }
        increase(sub);
        console.log(widx);
        widx += 1;
        if (widx >= WEEKS.length) widx = 0;
        return `${WEEKS[widx]}요일`;
    };
};

const weekend = (sub) => {
    console.log(sub);
    switch (sub) {
        case "수학":
            console.log(sub);
            (function a() {
                let cnt = -1;
                return function () {
                    cnt++;
                    return cnt;
                };
            })();
            console.log(a());
    }
};

// console.log(week);
const week2 = getNextWeek2();
// const week3 = getNextWeek3();
// const week4 = getNextWeek4();
const week5 = getNextWeek5();

// const getNextWeek2 = (() => {
//     let widx = -1;
//     return function () {
//         widx += 1; // side-effect!
//         if (widx >= WEEKS.length) widx = 0;
//         return `${WEEKS[widx]}요일`;
//     };
// })();
