// let tot = 0;

// for (let i = 1; i <= 100; i += 1) {
//     tot += i;
// }

// console.log(tot);

// // 기본형 팩토리얼

// function sum(n) {
//     if (n === 1) {
//         return n;
//     }
//     return n + sum(n - 1);
// }

// console.log(sum(100));

// function 곱(n) {
//     if (n === 1) {
//         return n;
//     }
//     return n * 곱(n - 1);
// }

// console.log(곱(4));

let numAndArray = [3, [1, 4, [2, 5], 3]];

const recursive_deep = (array) => {
    let cnt = [];
    for (k in array) {
        const a =
            typeof array[k] === "number" ? array[k] : recursive_deep(array[k]);
        console.log(a);
        cnt += a;
        // if (Array.isArray(array[k])) {
        //     recursive_deep(array[k]);
        // } else {
        //     cnt.push(array[k]);
        //     console.log(cnt);
        // }
    }
    return cnt;
};

recursive_deep(numAndArray);
