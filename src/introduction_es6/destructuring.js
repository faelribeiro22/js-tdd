let data = {
  name: 'Rafael',
  surname: 'Ribeiro',
  age: 25,
  social: {
    github: 'https://github.com/faelribeiro22',
  },
};

const { name, surname } = data;
console.log(name);
console.log(surname);

const { github } = data.social;
console.log(github);

const { github: gh } = data.social;

console.log(gh);
