// deepCopy()

const deepCopyObject = (arrObj) => {
    let copy = Array.isArray(arrObj) ? [] : {};
    for (let k in arrObj) {
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

export { deepCopyObject as deepCopy };
