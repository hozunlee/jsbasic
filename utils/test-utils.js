// assertEqual(), assertArray()

const assertEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
};

const assertArray = (arr1, arr2) => {
    if (assertEqual(arr1, arr2)) {
        console.log(arr1, "==>", "통과");
    } else {
        console.log(arr1, arr2, "불통");
    }
};

/*
assertArray([1, 2, 3], [1, 2, 3]);
assertArray(range(0), [0]);
assertArray(range(1, 5, -1), []);
assertArray(range(5, 1, 1), []);
assertArray(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArray(range(1, 10, 2), [1, 3, 5, 7, 9]);
assertArray(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArray(range(5), [1, 2, 3, 4, 5]);
assertArray(
    range(100),
    Array.from({ length: 100 }, (_, i) => i + 1)
);
assertArray(range(-5), [-5, -4, -3, -2, -1]);
assertArray(range(5, 5), [5]);
assertArray(range(0, 0, 5), [0]);
assertArray(range(0, 0), [0]);
assertArray(range(0, 5), [0, 1, 2, 3, 4, 5]);
assertArray(range(0, -1), [0, -1]);
assertArray(range(0, -3), [0, -1, -2, -3]);
assertArray(range(-3, 0), [-3, -2, -1, 0]);
assertArray(range(1, 5, 6), [1]);
assertArray(range(2, 1, -5), [2]);
assertArray(range(0, -1, -5), [0]);

assertArray(range(5, 5, 0), [5]);
assertArray(range(0, -1, 0), [0]);
*/

export { assertEqual, assertArray };
