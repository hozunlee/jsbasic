// Stack과 Queue에 공통 기능을 확장하시오.
// 공통: clear(), toArray(), print(), isEmpty, peek, length

class Collection {
    #arr;
    constructor(arr = []) {
        this.#arr = arr;
    }

    get __arr() {
        return this.#arr;
    }

    push(value) {
        return this.#arr.push(value);
    }

    pop() {
        return this.#arr.pop();
    }

    print() {
        return console.log(this.#arr);
    }

    toArray() {
        return [...this.#arr];
    }

    clear() {
        return (this.#arr.length = 0);
    }

    get isEmpty() {
        return !this.#arr.length;
    }

    get length() {
        return this.#arr.length;
    }

    get peek() {
        // 마지막(다음에 나올) 원소 // stack은 마지막, queue는 index 0
        return this.#arr[this.#arr.length - 1];
    }
}

class Stack extends Collection {
    print() {
        for (const k of this.__arr) {
            console.log(k);
        }
    }
}

class Queue extends Collection {
    enqueue(value) {
        return this.__arr.push(value);
    }

    dequeue() {
        return this.__arr.shift();
    }

    get peek() {
        return this.__arr[0];
    }
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
console.log("🚀 ~ file: velogClass2.js ~ line 35 ~ stack", stack);
const queue = new Queue([5, 4]);
console.log("🚀 ~ file: velogClass2.js ~ line 37 ~ queue", queue);

console.log(stack.toString());
return;

console.log("peek ====> ", stack.peek, queue.peek); // 마지막(다음에 나올) 원소
stack.print(); // 출력해보기
queue.print(); // 출력해보기
const arr = queue.toArray().map((a) => console.log(a));
if (!stack.isEmpty) stack.clear();
console.log("stack :>> ", stack);
stack.push(3);
console.log("stack :>> ", stack);

console.log("queue :>> ", queue);
if (queue.length) queue.clear();
console.log("queue :>> ", queue);
return;
