class MoreFn {
    #arr;
    constructor(arr = []) {
        this.#arr = arr;
    }
    print(arr) {
        console.log(arr);
    }

    peek(idx) {
        console.log(idx);
    }
}

// class와 Array 객체를 이용하여 Stack과 Queue를 구현하시오.

// ex1) Stack (DeepDive. 512)
class Stack extends MoreFn {
    #arr;
    constructor(arr = []) {
        super();
    }

    push(value) {
        return this.#arr.push(value);
    }

    pop() {
        return this.#arr.pop();
    }

    print() {
        super.print(this.#arr);
    }

    peek() {
        super.peek(this.#arr[this.#arr.length - 1]);
    }

    get arr() {
        return this.#arr;
    }
}

const stack = new Stack(); // or new Stack([1,2]);
stack.push(3); // 추가하기
console.log("stack.arr :>> ", stack.arr);
stack.print();

console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기

// ex2) Queue (DeepDive. 515)

class Queue extends MoreFn {
    #arr;
    constructor(arr = []) {
        super();
        this.#arr = arr;
    }

    enqueue(value) {
        return this.#arr.push(value);
    }

    dequeue() {
        return this.#arr.shift();
    }
    print() {
        super.print(this.#arr);
    }
}

const queue = new Queue([1, 2]);
queue.enqueue(1); // 추가하기
queue.print();
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기

const a = [1, 2, 3, 434];

console.log(a[a.length - 1]);
