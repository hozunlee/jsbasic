// intersect(), differ(), union(), isSuperset()

const intersect = (arr1, arr2) => {
    const [a, b] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];
    return new Set(a.filter((x) => b.includes(x)));
};
const differ = (arr1, arr2) => new Set(arr1.filter((x) => !arr2.includes(x)));

const union = (arr1, arr2) => new Set([...arr1, ...arr2]);

export { intersect, differ, union };
