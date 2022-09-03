const moment = require("moment");

const thisMonth = (nDay) => {
    const date = moment(nDay); // 해당날짜정보
    console.log(date.format("YYYY-MM"));
    const monthStartDate = Number(date.startOf("M").format("d")); // 해당 날짜의 달에서 시작 요일 인덱스
    const monthEndDay = Number(date.endOf("M").format("D")); // 해당날짜의 달 마지막 요일 날짜

    let weekCount = monthStartDate;

    thisCal = [` 일 월 화 수 목 금 토 ` + "\n"];
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

console.log(thisMonth(`2022-09`));

const a = "c";
console.log("a :>> ", a);
