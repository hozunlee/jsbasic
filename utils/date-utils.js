import moment from "moment";
// WEEKS, calendar(),

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

const calendar = (nDay) => {
    const date = moment(nDay); // 해당날짜정보
    console.log(date.format("YYYY-MM"));
    const monthStartDate = Number(date.startOf("M").format("d")); // 해당 날짜의 달에서 시작 요일 인덱스
    const monthEndDay = Number(date.endOf("M").format("D")); // 해당날짜의 달 마지막 요일 날짜

    let weekCount = monthStartDate;

    let thisCal = [` 일 월 화 수 목 금 토 ` + "\n"];
    console.log("typeof monthStartDate :>> ", typeof monthStartDate);
    for (let i = 0; i < monthStartDate; i += 1) {
        thisCal += "   ";
    }

    for (let i = 1; i <= monthEndDay; i += 1) {
        i < 10 ? (thisCal += "  " + i) : (thisCal += " " + i);
        weekCount++;

        if (weekCount % 7 == 0) {
            thisCal += "\n";
        }
    }

    return thisCal;
};

export { WEEKS, calendar };

/*
console.log(thisMonth(`2022-09`));

const a = "c";
console.log("a :>> ", a);
*/
