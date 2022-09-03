const today = new Date();

// #1
const q1 = new Date(0).setDate(2) / 1000;
console.log(q1);

// #3
const nextYear = new Date(today);
nextYear.setFullYear(today.getFullYear() + 1);
console.log(nextYear);
