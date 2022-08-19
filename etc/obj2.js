const kim = { nid: 3, nm: "Hong", addr: "Pusan" };

function copy(obj) {
    const copyKim = {};
    for (k in kim) {
        copyKim[k] = obj[k];
    }
    return copyKim;
}

const newKim = copy(kim);

// const newKim = { ...kim }; // spread(...) 연산자

newKim.addr = "Deagu";
console.log(kim.addr !== newKim.addr);
