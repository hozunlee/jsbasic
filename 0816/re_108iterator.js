// p.103에서 작성한 Stack과 Queue를 iterator로 작성하시오. (iterable한 클래스)

class Collection {
    #arr;
    constructor(...args) {
        this.#arr = Array.isArray(args[0]) ? args[0] : [...args];
    }

    //#1
    // [Symbol.iterator]() {
    //     return this.#arr.values();
    // }

    // #2 next 함수 직접구현하기
    [Symbol.iterator]() {
        let idx = -1;
        return {
            next: () => {
                idx += 1;
                return { value: this.#arr[idx], done: !this.#arr[idx] };
            },
        };
    }

    iterator() {
        // 관례적으로 이터레이터 함수를 만듬
        return this[Symbol.iterator]();
    }

    push(val) {
        this.#arr.push(val);
    }

    shift() {
        return this.#arr.shift();
    }

    print(cb) {
        if (cb) {
            cb([...this.#arr].reverse()); // stack queue 전부  다 reverse가 되어야해서 같이 찍어줌
            return;
        }
        console.log("stack>>", this.#arr);
    }

    clear() {
        this.#arr.length = 0;
    }

    get peek() {
        if (this.constructor.name === "Stack") {
            return this.#arr[this.length - 1];
        }
        return this.#arr[0];
    }
}

class Stack extends Collection {
    print() {
        super.print((arr) =>
            console.log("Stack>>\n", [...arr].reverse().join("\n "))
        ); // reverse는 순수함수기 때문에 arr를 스프레드 해서 가져옴
    }
}
class Queue extends Collection {
    enqueue() {
        super.push(val);
    }

    dequeue() {
        return super.shift();
    }

    print() {
        super.print((arr) => console.log(arr.join(" -> "), "->"));
    }
}

const stack = new Stack(3, 3, 4, 2);
const queue = new Queue([1, 2]);
console.log(stack);
console.log([...stack], [...queue]);

for (const s of stack) console.log(s);
for (const q of queue) console.log(q);
const itStack = stack[Symbol.iterator]();
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
return;
// ...
const itQueue = queue.iterator();
console.log(itQueue.next());
