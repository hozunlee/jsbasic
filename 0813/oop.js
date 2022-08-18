class Animal {
    static ID = 1;
    static isDog(ani) {
        return ani.name === "Dog";
    }
}

//   Animal.prototype.f =
const dog = new Animal("Dog");
// dog.isDog(dog); // TypeError: dog.isDog is not a function
Animal.isDog(dog); // OK

console.log(dog.ID); // undefined
console.log(Animal.ID); // 1    cf. Animal.ID = 2; // ?

Animal.ID = 2;
console.log(Animal.ID); // 1    cf. Animal.ID = 2; // ?
