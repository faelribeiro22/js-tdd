let defer = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(true) {
      resolve('Hello! it works!');
    } else {
      reject(new Error('Error!'));
    }
  }, 2000);
});

defer.then((data) => {
  console.log(data);
  return 'foo';
})
  .then((data) => { console.log(data); })
  .catch((err) => { console.log(err); });
