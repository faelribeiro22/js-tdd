let front = ['react', 'vue', 'angular'];
let back = ['python', 'ruby', 'nodejs'];

console.log([...'Rafael']);
console.log(...front);

// before spread
// let fullstack = front.concat(back);
//console.log(fullstack);

let fullstack = [...front, 'RxJS', ...back];
console.log(fullstack);
