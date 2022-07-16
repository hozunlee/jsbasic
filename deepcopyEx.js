const kim = {
    nid: 3,
    addr: "Pusan",
    arr: [1, 2, 3, { aid: 1 }, [10, 20]],
    oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
    fn() {
        console.log("fn =", this.nid);
    },
};

function deepCopyObject(arrobj) {
    let copyObj = Array.isArray(arrobj) ? [] : {};
    for (let k in arrobj) {
        const tempObj = arrobj[k];
        if (typeof tempObj === "object") {
            copyObj[k] = deepCopyObject(tempObj);
        } else {
            copyObj[k] = arrobj[k];
        }
    }
    return copyObj;
}

const newKim = deepCopyObject(kim);
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";
kim.fn();
console.log(kim); // oo와 arr이 다르면 통과!
console.log("-------------");
console.log(newKim);

console.log(kim.fn);
