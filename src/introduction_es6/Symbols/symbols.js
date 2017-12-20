let foo = Symbol('name');
console.log(foo);

let obj = {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  },
}
