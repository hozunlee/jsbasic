// Stack과 Queue에 공통 기능을 확장하시오.
// 공통: clear(), toArray(), print(), isEmpty, peek, length

class Collection {
    constructor(arr = []) {
        this.arr = arr;
    }
    push(value) {
        return this.arr.push(value);
    }

    pop() {
        return this.arr.pop();
    }

    print() {
        return console.log(this.arr);
    }

    get peek() {
        // 마지막(다음에 나올) 원소 // stack은 마지막, queue는 index 0
        return this.arr[this.arr.length - 1];
    }
}

class Stack extends Collection {
    print() {
        for (const k of this.arr) {
            console.log(k);
        }
    }
}

class Queue extends Collection {
    constructor(arr) {
        super(arr);
    }
    enqueue(value) {
        return this.arr.push(value);
    }

    dequeue() {
        return this.arr.shift();
    }

    get peek() {
        return this.arr[0];
    }
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
console.log("🚀 ~ file: velogClass2.js ~ line 35 ~ stack", stack);
const queue = new Queue([5, 4]);
console.log("🚀 ~ file: velogClass2.js ~ line 37 ~ queue", queue);

console.log("peek ====> ", stack.peek, queue.peek); // 마지막(다음에 나올) 원소
stack.print(); // 출력해보기
queue.print(); // 출력해보기
return;
const arr = queue.toArray().map((a) => console.log(a));
if (!stack.isEmpty) stack.clear();
if (queue.length) queue.clear();
