// class와 Array 객체를 이용하여 Stack과 Queue를 구현하시오.

// ex1) Stack
class Stack {
    arr;
    constructor(arr = []) {
        this.arr = arr;
    }
    push(value) {
        return this.arr.push(value);
    }

    pop() {
        return this.arr.pop();
    }
}

class Queue {
    arr;
    constructor(arr = []) {
        this.arr = arr;
    }
    enqueue(value) {
        return this.arr.push(value);
    }

    dequeue() {
        return this.arr.shift();
    }
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log(stack);
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
// ex2) Queue
const queue = new Queue([5, 4]);
queue.enqueue(3); // 추가하기
console.log(queue);
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
console.log(queue);
return;
