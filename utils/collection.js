// Stack, Queue, ArrayList

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

class ArrayList extends Collection {
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

export { Stack, Queue, arrayToList };

/*
const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
const queue = new Queue([5, 4]);

console.log(stack.toString());

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

*/
