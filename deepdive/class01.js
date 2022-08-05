// 클래스 이름은 파스칼케이스로 만든다.

class Person {
    constructor(name) {
        this.name = name;
    }

    //프로토타입 메서드
    sayHi() {
        console.log(`HI! My name is ${this.name}`);
    }

    static sayHello() {
        console.log("Hello!");
    }
}

// 인스턴스 생성
const me = new Person("lee");
const me1 = new Person("how");

console.log(me.sayHi === me1.sayHi); //true
me.sayHi();
me1.sayHi();

console.log("인스턴스의 프로퍼티 참조", me.name);

// 프로토타입 메서드 호출
me.sayHi();

// 정적 메서드 호출
Person.sayHello();
console.log(me.sayHello());
me1.sayHello();
// me.sayHello(); // 정적 메서드는 인스턴스로 호출할수 없다.

// 클래스도 호이스팅이 된다.
const Lee = "";

{
    console.log(Lee);
    class Lee {}
} // error
