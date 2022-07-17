const obj = {
    name: "ObjName",
    bark1() {
        console.log("1=", this.name);
        const self = this; // setTImeout을 돌다가 this를 까먹기 때문에... self 라는 변수로 저장해줘서 참조했다.
        setTimeout(function () {
            console.log("11=", self.name);
        }, 1000);
        console.log("xxxx");
    },
    bark2() {
        console.log("2=", this.name);
        setTimeout(() => {
            console.log("22=", this.name); // arrowfn에서 this를 쓰면 스코프의 상위 스코프를 참조한다.
            // 따라서 setTimeout 위에 bark2를 보고있는다.
        }, 1000);
    },
};

obj.bark1();
obj.bark2();
