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

// Valor default caso não exista a propriedade no objeto
const { city = 'Udia' } = data;
console.log(city);
console.log(data);

//Destructuring array

const array = ['Rafael', 'Ribeiro', 25, 'Udia'];

const [firsName, secondName, age, cityAbbreviated] = array;
console.log(firsName, secondName, age, cityAbbreviated);
