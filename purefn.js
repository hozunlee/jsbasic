const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeek = (() => {
    let widx = -1;
    if (widx >= weeks.length) widx = 0;
    return function () {
        widx += 1; // side-effect!
        return `${weeks[widx]}요일`;
    };
})();
// 순수함수를 짜기 위한 클로저 생성

let cnt = 0;
const intl = setInterval(() => {
    let widx = 2; // side-effect!
    console.log("call", cnt, getNextWeek());
    if ((cnt += 1) === 7) clearInterval(intl);
}, 1000);
