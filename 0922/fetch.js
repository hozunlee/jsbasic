import fetch from "node-fetch";

const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
const myFetch = (url) => fetch(url).then((user) => user.json());

const r = myFetch(sampleUrl);
console.log("🚀 ~ file: fetch.js ~ line 7 ~ r", r.then(console.log));
