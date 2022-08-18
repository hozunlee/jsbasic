// 성호님 코드

// stack 만 구현할 때
// class Stack {
//     #arr;
//     constructor(...args) {
//         // 뭐가 들어올지 모르니까 ...rest로
//         // this.#arr = args[0];
//         this.#arr = Array.isArray(args[0]) ? args[0] : [...args];
//     }

//     push(val) {
//         this.#arr.push(val);
//     }
// }

// const st2 = new Stack(1,2) // 배열이 아닌값을 받을 때.

//부모가 다가지고 있는건 확장성을 위해서 임
// 각자의 다른건만 남기고 공통인건 올려야해
// print는 오버라이딩했는데 멤버 변수 떄문에 콜백함수를 사용했음

class Collection {
    #arr;
    constructor(...args) {
        // 뭐가 들어올지 모르니까 ...rest로
        // this.#arr = args[0];
        this.#arr = Array.isArray(args[0]) ? args[0] : [...args];
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

class Stack extends Collection() {
    print() {
        super.print((arr) =>
            console.log("Stack>>\n", [...arr].reverse().join("\n "))
        ); // reverse는 순수함수기 때문에 arr를 스프레드 해서 가져옴
    }
}
class Queue extends Collection() {
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

const st2 = new Stack(1, 2); // 배열이 아닌값을 받을 때.
