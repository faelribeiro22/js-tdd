let mySet = new Set(['Rafael', 'jão', 'tutu']);

// O set adiciona apenas 1 elemento, não permite repetições

mySet.add('Rafael');

console.log(mySet);
console.log(mySet.size);

mySet.delete('Rafael');

console.log(mySet.has('Rafael'));

const it = mySet.values();

for (name of it) {
  console.log(name);
}
