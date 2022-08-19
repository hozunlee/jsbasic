const kim = {
    nid: 3,
    addr: "Pusan",
    arr: [1, 2, 3, { aid: 1 }, [10, 20]],
    oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
};

const deepCopyObject = (arrObj) => {
    let copy = Array.isArray(arrObj) ? [] : {};
    for (k in arrObj) {
        const tempObj = arrObj[k];
        console.log(typeof arrObj[k]);
        if (typeof tempObj === "object") {
            copy[k] = deepCopyObject(tempObj);
        } else {
            copy[k] = arrObj[k];
        }
    }
    return copy;
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
