class StackNQueue {
    // #arr;
    _arr; // protected 처럼 쓰임
    constructor(_arr = []) {
        this._arr = _arr;
    }

    // #1
    // [Symbol.iterator]() {
    //     // Symbol 이 붙은 이유는 중복을 막기 위해서
    //     return this._arr.values();
    // }

    get peek() {
        return this._arr[0];
    }

    get length() {
        return this._arr.length;
    }

    get isEmpty() {
        return !this._arr.length;
    }

    // #2
    // [Symbol.iterator]() {
    //     let idx = -1;
    //     // let done = false;
    //     return {
    //         next: () => {
    //             idx += 1;
    //             // done ||= idx > this._arr.length; // done = done || idx >= this._arr.length; 같은거
    //             // return { value: this._arr[idx], done };

    //             return { value: this._arr[idx], done: !this._arr[idx] };
    //         },
    //     };
    // }

    // #3 제너레이터로

    // *[Symbol.iterator]() {
    //     for (let i = 0; i < this._arr.length; i += 1) {
    //         yield this._arr[i];
    //     }
    // }

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

    // get __arr {
    //     return this.#arr
    // }

    clear() {
        this._arr = [];
        console.log("clear_this.arr :>> ", this._arr);
        // this.arr.length = 0; // 새로운 배열을 만드는 것보다 추천! 프로퍼티를 건드는 거니까!
    }
    toArray() {
        return [...this._arr];
    }
}

class Stack extends StackNQueue {
    // constructor(arr) {
    //     super(arr);
    // } // super constructor 쓸거면 생략가능

    // super.__arr // getter 함수로 해당 arr private처럼 사용가능함
    // this.__arr // this는 체인을 타고가서 __arr 을 super 에 찾음

    push(value) {
        return this._arr.push(value);
    }

    pop() {
        return this._arr.pop();
    }

    print() {
        for (let i = this.length - 1; i >= 0; i -= 1) {
            console.log("stack ===>", this._arr[i]);
        }
    }

    peek() {
        console.log("peek ===>", this._arr[this.length - 1]);
    }
}

const stack = new Stack([1, 2]); // or new Stack([1,2]);
stack.push(3); // 추가하기
stack.print();
console.log("stack.arr :>> ", stack.arr);
console.log(stack);
console.log(stack.pop());
stack.print();
stack.peek;
console.log(stack.isEmpty);
if (!stack.isEmpty) stack.clear();

console.log("================ stack end");
class Queue extends StackNQueue {
    // constructor(arr) {
    //     super(arr);
    // } // 부모꺼 가져오고 변화가 없다면 생략이 가능하다.

    enqueue(value) {
        return this._arr.push(value);
    }

    dequeue() {
        return this._arr.shift();
    }
}

const queue = new Queue([1, 2]);
queue.enqueue(1); // 추가하기
// console.log("삭제", queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
// queue.print();

// console.log(queue.peek);

// queue.enqueue(1); // 추가하기
// queue.print();

// const arr2 = queue.toArray().map((a) => console.log("map", a));

console.log("------------------------------");

// stack.push(5);
// console.log([...stack], [...queue]);
// for (const s of stack) console.log(s);
for (const q of queue) console.log(q);

queue.enqueue(3);
const itQueue = queue.iterator();

console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());

// static 변수로 listToArray를 만듬

//ArrayList.listToArray({ value: 1, rest: { value: 2 } }) ⇒ [1,2]
//ArrayList.arrayToList([1,2]) ⇒ { value: 1, rest: { value: 2 } }

class ArrayList extends Collection {}
