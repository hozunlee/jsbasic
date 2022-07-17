// const Dog = function (name) {
//     // 함수 선언문
//     console.log(this, new.target, this instanceof Dog);
//     this.name = name; // 이건 글로벌 this임
//     this.bark = function () {
//         console.log("bark=", new.target, this.name, name);
//     };
//     this.bark2 = () => console.log("bark2=", new.target, this.name, name);
// };

// const dog = Dog("Doggy");
// const lucy = new Dog("Lucy");
// // bark(); // ?
// // bark2();

// lucy.bark(); // ?
// lucy.bark2(); // ?
// console.log("type=", typeof dog); // ?
// console.log("type=", typeof lucy); // ?

const Cat = (name) => {
    console.log(this, new.target);
    this.name = name;
    this.bark = function () {
    console.log('bark=', new.target, this.name, name);
    };
    this.bark2 = () =>
{      console.log('bark2=', new.target, this.name, name);}

    
      return this
  }
  
  const cat = Cat('Coco');
  // const cat = new Cat(''); // error!!
  cat.bark(); // ?
  cat.bark2(); // ? 
//   Cat.bark(); // ?
//   Cat.bark2(); // ? 
  console.log('type=', typeof cat); // ? 
  
  // cf. arrow function's this (p.52)
  