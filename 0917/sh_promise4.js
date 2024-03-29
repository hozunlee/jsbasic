const promiseFn = (id = 1) =>
    new Promise((resolve, reject) => {
        console.log("id>>", id);
        if (id < 7) resolve(id + 1);
        else reject(new Error("어디로?" + id));
    });

promiseFn(1)
    .then((res) => {
        console.log("res1>>", res);
        return promiseFn(res); // Need Return the Promise Object!!
    })
    .then((res) => {
        console.log("res2>>", res); // undefined
        if (!res) throw new Error("NOT return");
        return promiseFn(res ?? 3);
    })
    .catch((err) => console.log("Error!!>>", err));
