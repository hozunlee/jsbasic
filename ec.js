const x = 1;

foo(); //

const zz = 1;
console.log(zz);

function foo() {
    const y = 2;
    bar();
    function bar() {
        const z = 3;
        console.log("🚀 ~ file: ec.js ~ line 5 ~ foo ~ y", y);
        console.log("🚀 ~ file: ec.js ~ line 2 ~ x", x);
        console.log("🚀 ~ file: ec.js ~ line 8 ~ bar ~ z", z);

        console.log(x + y + z);
    }
}
