const optimalStop = require('unloop-bootcamp-optimal-stop');

const poolSize = 5;

const config = {
  size: poolSize,
  timelyRejections: 0,
  tardyRejections: 1
};

const comparer = (first, second) => first - second;

const runner = optimalStop.bulkRunner(30000);

const myAlg = (iterator, accept, hold ) => {

  let yardstick;
  const lookFor = 3;

  for(let i = 0; i < poolSize; i++) {
    let current = iterator.next();
    if (i < lookFor) {
      if (yardstick === undefined || current.value > yardstick) {
        yardstick = current.value;
      }

      continue;
    }

    if (current.value >= yardstick) {
      accept(current.value);
    }

    if (i === poolSize - 1) {
      accept(current.value);
    }
  }
};

const sim = optimalStop.simulator.bind(
  undefined,
  myAlg,
  optimalStop.factories.numberRange(0, 100),
  comparer,
  config
);

const results = runner(optimalStop.timed(sim));
console.log(results);

const parsedResults = optimalStop.parseTimedResults(results);
console.log(parsedResults);
