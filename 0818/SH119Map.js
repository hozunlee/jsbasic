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

const deptMap = new Map(depts.map((d) => [d.dname, d])); // 이터레이터 사용
deptMap.set();

const deptIdMap = new Map(depts.map((d) => [d.id, d]));

const empDept = new Map(
    //emps.map(e => [e, depts[e.dept - 1]] // array를 이용하면 조심해할 점이 있음 array의 인덱스를 바로이용하는것!
    // emps.map((e) => [e, depts.find((d) => d.id === e.dept)])
    // emps.map((e) => [e, deptIdMap.get(e.dept)])
    emps.map((e) => {
        const d = deptIdMap.get(e.dept);
        return [(delete e.dept, e), d]; // 쉼표괄호 연산자 참고
    }) // 원본 객체를 수정해서 중복값을 없앤다. dept 메모리 덜 차지!
);

//
// );

console.log(deptMap); // Map(2) { '인사팀' => { id: 1, dname: '인사팀' }, '개발팀' => { id: 2, dname: '개발팀' } }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong', dept: 1 } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'

for (const key of empDept.keys()) {
    if (empDept.get(key).dname === devTeam.dname) {
        console.log(key.name);
    }
}

// const devEmpNames = [...empDept]
//     .filter((ed) => ed[1].dname === devTeam.dname)
//     .map((ed) => ed[0].name);
// console.log(
//     "🚀 ~ file: SH119Map.js ~ line 41 ~ devEmpNames",
//     devEmpNames.join(", ")
// );

// const devEmpNames = [...empDept]
//     .filter(([_, dept]) => dept.dname === devTeam.dname)
//     .map(([e, _]) => e.name);
// console.log(
//     "🚀 ~ file: SH119Map.js ~ line 41 ~ devEmpNames",
//     devEmpNames.join(", ")
// );

const devEmpNames = [...empDept]
    .filter(([_, dept]) => console.log(dept))
    .map(([e, _]) => console.log(e));

console.log(
    "🚀 ~ file: SH119Map.js ~ line 41 ~ devEmpNames",

    devEmpNames.join(", ")
);

// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
