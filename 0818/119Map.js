//다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empDept를 만들고,  개발팀 직원 이름 목록을 출력하시오.

const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
    hong,
    kim,
    { id: 3, name: "Park", dept: 2 },
    { id: 4, name: "Choi", dept: 2 },
];

const deptMap = new Map([
    [hrTeam.dname, hrTeam],
    [devTeam.dname, devTeam],
]);

const empDept = new Map([
    [emps[0], hrTeam],
    [emps[1], devTeam],
    [emps[2], devTeam],
    [emps[3], devTeam],
]);

console.log(deptMap); // Map(2) { '인사팀' => { id: 1, dname: '인사팀' }, '개발팀' => { id: 2, dname: '개발팀' } }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong', dept: 1 } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'

for (const key of empDept.keys()) {
    if (empDept.get(key).dname === "개발팀") {
        console.log(key.name);
    }
}

// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
