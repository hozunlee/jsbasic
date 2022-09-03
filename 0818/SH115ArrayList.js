class StackNQueue {
    // #arr;
    _arr; // protected 처럼 쓰임
    constructor(...args) {
        // 뭐가 들어올지 모르니까 ...rest로
        // this.#arr = args[0];
        this._arr = Array.isArray(args[0]) ? args[0] : [...args];
    }

    push(val) {
        this._arr.push(val);
    }

    get peek() {
        return this._arr[0];
    }

    get length() {
        return this._arr.length;
    }

    get isEmpty() {
        return !this._arr.length;
    }
    // iterator 제너레이터 만들기
    *[Symbol.iterator]() {
        for (const k of this._arr) {
            yield k;
        }
    }

    iterator() {
        // 관례적으로 이터레이터 함수를 만듬
        return this[Symbol.iterator]();
    }

    print() {
        console.log(this._arr);
    }

    clear() {
        this._arr = [];
        console.log("clear_this.arr :>> ", this._arr);
        // this.arr.length = 0; // 새로운 배열을 만드는 것보다 추천! 프로퍼티를 건드는 거니까!
    }
    toArray() {
        return [...this._arr];
    }

    get(index) {
        return this._arr[index];
    }

    _splice(...args) {
        //외부에서 직접쓰지말라고 _붙이기
        return this._arr.splice(...args);
    }

    indexOf(value) {
        return this._arr.indexOf(value);
    }
}

// static 변수로 listToArray를 만듬

//ArrayList.listToArray({ value: 1, rest: { value: 2 } }) ⇒ [1,2]
//ArrayList.arrayToList([1,2]) ⇒ { value: 1, rest: { value: 2 } }

class ArrayList extends StackNQueue {
    // arr;
    // constructor(arr) {
    //     super();
    //     this.arr = ArrayList.listToArray(arr);
    // }

    // static 은 constructor 위에! 쓸려면 써라
    static listToArray(lst) {
        const arr = [];
        let node = lst;
        while (node?.value) {
            console.log(node);
            console.log(node.value);
            arr.push(node.value);
            node = node.rest;
        }
        return arr;
    }

    // #1
    // static arrayToList(arr) {
    //     if (arr.length === 0) return;
    //     return {
    //         value: arr[0],
    //         rest: ArrayList.arrayToList(arr.slice(1)),
    //     };
    // } // slice를 활용하면 객체를 직접만들어서 전달하기때문에 빢셈

    // #2
    // static arrayToList(arr) {
    //     return (function _al(i = 0) {
    //         if (i === arr.length) return;
    //         return {
    //             value: arr[i],
    //             rest: _al(i + 1),
    //         };
    //     })(); // arr를 활용해서 재사용없이 재귀를 태우는
    // }

    // #3
    static arrayToList(arr) {
        return arr.reduce((o, a, i) => {
            return { value: a, rest: o };
        }, undefined);
    }

    // #4
    static arrayToList(arr) {
        let node;
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            node = { value: arr[i], rest: node };
        }
        return node;
    }

    constructor(lstOrArr) {
        super(
            Array.isArray(lstOrArr) ? lstOrArr : ArrayList.listToArray(lstOrArr)
        );
    }

    add(value, index) {
        if (index > 0) super.push(value);
    }

    removeByIndex(index) {
        super._splice(index, 1);
    }

    remove(value) {
        this.removeByIndex(super.indexOf(value));
    }

    set(index, value) {
        super._splice(index, 0, value);
    }
    size() {
        return this.length;
    }
}

const alist = new ArrayList({ value: 1, rest: { value: 2 } });

// console.log(
//     "ArrayList.listToArray :>> ",
//     ArrayList.listToArray({
//         value: 1,
//         rest: { value: 33, rest: { value: 22, rest: { value: 3 } } },
//     })
// );

// console.log("ArrayList.arrayToList(1,2) :>> ", ArrayList.arrayToList([1, 2]));

console.log("alist :>> ", alist);
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.remove(2); // { value: 1, rest: { value: 3 } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
console.log("alist.get(2) :>> ", alist.get(2)); // 22
console.log("alist.size() :>> ", alist.size()); // 4
console.log("alist.indexOf(300) :>> ", alist.indexOf(300)); // 1
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
const list = ArrayList.arrayToList(alist.toArray());
console.log(JSON.stringify(list, null, "   "));
return;
alist.contains(300);
alist.contains(301); // true, false
alist.isEmpty;
alist.peek; // false, 3
alist.toArray(); // [1, 300, 22, 3]
alist.iterator().next(); // { value: 1, done: false }
alist.clear(); // all clear
