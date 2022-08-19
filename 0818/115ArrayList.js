class StackNQueue {
    // #arr;
    _arr; // protected 처럼 쓰임
    constructor(arr = []) {
        this._arr = arr;
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
}

// static 변수로 listToArray를 만듬

//ArrayList.listToArray({ value: 1, rest: { value: 2 } }) ⇒ [1,2]
//ArrayList.arrayToList([1,2]) ⇒ { value: 1, rest: { value: 2 } }

class ArrayList extends StackNQueue {
    static listToArray = ((_obj) => {
        const arr = [];
        return function req(_obj) {
            for (const k in _obj) {
                if (typeof _obj[k] === "object") {
                    const a = req(_obj[k]);
                } else {
                    arr.push(_obj[k]);
                }
            }
            return arr;
        };
    })();
}

const alist = new ArrayList({ value: 1, rest: { value: 2 } });

console.log(
    "ArrayList.listToArray :>> ",
    ArrayList.listToArray({
        value: 1,
        rest: { value: 33, rest: { value: 22, rest: { value: 3 } } },
    })
);

console.log("alist :>> ", alist);
return;
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.remove(2); // { value: 1, rest: { value: 3 } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.get(2);
alist.size(); // 22, 4
alist.indexOf(300); // 1
alist.contains(300);
alist.contains(301); // true, false
alist.isEmpty;
alist.peek; // false, 3
alist.toArray(); // [1, 300, 22, 3]
alist.iterator().next(); // { value: 1, done: false }
alist.clear(); // all clear
