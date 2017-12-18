const front = ['react', 'vue', 'angular'];
const back = ['python', 'ruby', 'nodejs'];

console.log([...'Rafael']);
console.log(...front);

// before spread
// let fullstack = front.concat(back);
// console.log(fullstack);

const fullstack = [...front, 'RxJS', ...back];
console.log(fullstack);

// Spread em funções
function makeSandwich(bread, cheese, sauce) {
  console.log(`Ỳour Sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`);
}

const ingredients = ['white', 'cheddar', 'barbecue', 'teste'];
makeSandwich(...ingredients);
