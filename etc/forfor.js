const person = { name: "Lee" };

console.log(Object.isFrozen(person));

Object.freeze(person);

console.log(Object.getOwnPropertyDescriptors(person));

const a = { ...person };

console.log(a);

console.log(Object.getOwnPropertyDescriptors(a));
