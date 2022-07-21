// for (let i = 2; i < 10; i += 1) {
//     for (let j = 1; j < 10; j += 1) {
//         const res = i * j;
//         if (res % 2 === 0) {
//             continue;
//         } else {
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//     }
// }

// for (let i = 0; i <= 5; i += 1) {
//     for (let j = 5; j >= 0; j--) {
//         console.log("*".repeat(j));
//     }
// }

// for (let i = 0; i < 10; i += 1) {
//     if (i % 2 === 0) continue;
//     console.log("*".repeat(i));
// }

// for (let i = 0; i < 10; i += 1) {
//     if (i % 2 === 0) continue;
//     console.log("*".repeat(10 - i));
// }

for (let i = 0; i <= 5; i += 1) {
    // let star = "";
    // star += " ".repeat(i);
    // for (let j = 5; j >= 0; j -= 1) {
    //     star += "*";
    // }
    console.log(" ".repeat(i) + "*".repeat(5 - i));
    // console.log(star);
}

// for (let i = 0; i <= 10; i += 1) {
//     let word = "";
//     if (i % 2 === 0) continue;
//     for (let j = 5; j >= 0; j -= 1) {
//         word += " ".repeat();
//     }
//     word += "*".repeat(i);
//     console.log(word);
// }

const fibo = (n) => {
    if (n < 3) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(4));
