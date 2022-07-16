function f1(params) {
    var gg = 11;
    let bb = 22;
    f2();
    function f2(params) {
        console.log(gg, bb);
    }
}

f1();

function varFn() {
    var v = 1;
    {
        var v = 2,
            vv = 3;
        console.log(v, vv);
    }
    console.log(v, vv); // 2, 3
}

varFn();
letFn();
function letFn() {
    let l = 1;
    {
        let l = 2;
        let ll = 3;
        console.log(l, ll); // 2, 3
    }
    console.log(l); // 1
}

// 클로저
let fn;
{
    const privateUser = { id: 1, name: "ho" };
    fn = () => privateUser;
}

const hong = fn();
hong.age = 30;
console.log(hong);
