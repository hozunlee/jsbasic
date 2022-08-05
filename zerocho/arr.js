// p127

const arr = ["기", "라", "다", "라", "마", "라"];

for (k of arr) {
    const value = arr.indexOf("라");
    console.log("value :>> ", value);
    arr.splice(value, 1);
}

console.log(arr);

const zerocho = {
    name: {
        last: "조",
    },
};

console.log(zerocho.name.last);
