const kim = {
    nid: 3,
    addr: "Pusan",
    arr: [1, 2, 3, { aid: 1 }, [10, 20]],
    oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
};

const deepCopyObject = (arrObj) => {
    const newArr = Array.isArray(arrObj) ? [] : {};
    for (let k in arrObj) {
        const temp = arrObj[k];
        console.log("typeof temp :>> ", typeof temp);
        if (typeof temp === "object") {
            newArr[k] = deepCopyObject(temp);
        } else {
            newArr[k] = temp; // 원시값 복사
        }
    }
    return newArr;
};

const newKim = deepCopyObject(kim);
// oo와 arr이 다르면 통과!
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
console.log("kim :>> ", kim);
console.log("newKim :>> ", newKim);
