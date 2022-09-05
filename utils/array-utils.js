// range splicePure assertEqual

const range = (start, end, step) => {
    if ((start < end && step < 0) || (start > end && step > 0)) {
        // if (start !== end && (end - start) * step < 0) return []
        return [];
    } else if (step === 0) {
        return [start];
    }

    const temp = start;
    end = end ?? (0 < start ? ((start = 1), temp) : start === 0 ? start : -1);
    // end = end ?? (start <= 0 ? 0 : ((start = 1), temp));
    step = start !== end ? step ?? (start >= end ? -1 : 1) : -1;

    console.log(start, end, step);
    const res = [];
    for (let i = start; start < end ? i <= end : i >= end; i += step) {
        res.push(i);
    }

    return res;
};

const splicePure = (arr, idx, delCnt = arr.length - 1, ...add) => [
    ...arr.slice(0, idx),
    ...add,
    ...arr.slice(idx + delCnt),
];

export { assertArray } from "./test-utils.js"; // 간접 익스포트 해라
export { range, splicePure, assertArray as assertEqual };
