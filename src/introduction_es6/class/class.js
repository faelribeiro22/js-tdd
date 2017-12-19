class Animal {
  constructor(name, sound) {
    this.kind = name;
    this.sound = sound;
  }

  hello() {
    console.log(`${this.sound} I'm a ${this.name}!`)
  }

  static info() {
    console.log('This is a class to create animal!');
  }

  get name() {
    console.log('My name is Nob!');
  }

  set nickname(name) {
    this.nick = name;
  }
}

const dog = new Animal('dog', 'sound');
const cat = new Animal('cat', 'sound');
dog.hello();
Animal.info();
console.log(cat.name);
