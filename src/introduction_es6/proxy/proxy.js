let obj = {
  name: 'Willian',
  age: 26
};

let proxy = new Proxy(obj, {
  get(targe, name) {
    console.log('Alguém está ped')
  }
})
