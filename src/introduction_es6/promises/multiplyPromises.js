const currency = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ currency: 'euro', value: 3.50 });
  }, 2000);
});

const countries = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Ireland', 'England', 'Scotland']);
  }, 600);
});
// Assim que todas as promises são resolvidas, ele executa o then
Promise
  .all([currency, countries])
  .then((responses) => {
    console.log(responses);
  });

// Assim que a prime promise é retornada ele já executa ignorando as outras

Promise
  .race([currency, countries])
  .then((responses) => {
    console.log(responses);
  });
