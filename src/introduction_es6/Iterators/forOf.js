

let txt = 'Ireland'; // iterable
let it = txt[Symbol.iterator()]; //iterator

console.log(it.next());

for (letter of txt) {
  console.log(letter);
}
