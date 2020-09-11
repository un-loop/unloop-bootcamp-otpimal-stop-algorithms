const optimalStop = require('unloop-bootcamp-optimal-stop');

const getNumber = optimalStop.factories.normalDistribution(450, 50);

for(let i = 0; i < 20; i++) {
  console.log(getNumber());
}

