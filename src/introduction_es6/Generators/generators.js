function* getNames() {
  yield ('W');
  yield ('T');
  yield ('J');
}

const letters = getNames();

console.log(letters.next());
