// 다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empDept를 만들고,  개발팀 직원 이름 목록을 출력하시오.
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

const deptMap = new Map(depts.map((x) => [x.dname, x]));

const deptIdMap = new Map(depts.map((d) => [d.id, d]));
console.log("🚀 ~ file: review_Map.js ~ line 19 ~ deptIdMap", deptIdMap);

// const empDept = new Map(emps.map((x) => [x, depts[x.dept - 1]]));
// const empDept = new Map(
//     emps.map((x) => [x, depts.find((d) => d.id === x.dept)])
// );
// const empDept = new Map(emps.map((x) => [x, deptIdMap.get(x.dept)]));
const empDept = new Map(
    emps.map((e) => {
        const d = deptIdMap.get(e.dept);
        return [(delete e.dept, e), d];
    })
);

const a = new Map([
    [1, 2],
    [3, 4],
]);

console.log(a.size);

console.log(deptMap); // Map(2) { '인사팀' => { id: 1, dname: '인사팀' }, '개발팀' => { id: 2, dname: '개발팀' } }
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }
console.log(empDept.get(kim).dname); // '개발팀'

// const devEmpNames = [...empDept]
//     .filter((ed) => ed[1].dname === devTeam.dname)
//     .map((ed) => ed[0].name);
// console.log(
//     "🚀 ~ file: review_Map.js ~ line 45 ~ devEmpNames",
//     devEmpNames.join(", ")
// );
// const devEmpNames = [...empDept]
//     .filter(([_, dept]) => dept.dname === devTeam.dname)
//     .map(([e, _]) => e.name);

console.log("🚀 ~ file: review_Map.js ~ line 45 ~ devEmpNames", devEmpNames);

// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
