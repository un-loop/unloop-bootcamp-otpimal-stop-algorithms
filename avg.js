const optimalStop = require('unloop-bootcamp-optimal-stop');

const range = optimalStop.factories.numberRange(0, 100);

const arr = [];
const size = 5000000;

for(let i = 0; i < size; i++) {
  arr.push(range());
}

const avg = arr.reduce((sum, val) => sum += val, 0) / arr.length;
//console.log(arr);
console.log(avg);