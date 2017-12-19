class Animal {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Ì'm ${this.name}!`);
  }
}

const elephant = new Animal('Dumbo');

class Dog extends Animal {
  constructor(sound) {
    super('Dog');
    this.sound = sound;
  }

  bark() {
    console.log(`auau I'm ${this.name}`);
  }
}
