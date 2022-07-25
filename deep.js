const kim = {
    nid: 3,
    addr: "Pusan",
    arr: [1, 2, 3, { aid: 1 }, [10, 20]],
    oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
};

const deepCopyObject = (arrObj) => {
    let newKim = Array.isArray(arrObj) ? [] : {};
    for (k in arrObj) {
        // in은 객체에서 of는 배열에서
        temp = arrObj[k];
        if (typeof temp === "object") {
            newKim[k] = deepCopyObject(temp);
        } else {
            newKim[k] = arrObj[k];
        }
        console.log(k);
    }
    return newKim;
};

const newKim = deepCopyObject(kim);
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
console.log(kim); // oo와 arr이 다르면 통과!
console.log("---------->");
console.log(newKim);
