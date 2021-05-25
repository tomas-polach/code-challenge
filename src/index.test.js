const { wait } = require('./util/wait.js');
const { requestAandB, requestBandC } = require('./index.js');

test('Test cache timings ', () => Promise.all([

  // send two requests in parallel after 0 ms (immediately)
  wait(0).then(() => Promise.all([
    expect(requestAandB()).resolves.toEqual('A1B1'),
    expect(requestBandC()).resolves.toEqual('B1C1'),
  ])),

  // send two requests in parallel after 480 ms
  wait(480).then(() => Promise.all([
    expect(requestAandB()).resolves.toEqual('A1B1'),
    expect(requestBandC()).resolves.toEqual('B1C1'),
  ])),

  // send two requests in parallel after 500 ms
  wait(520).then(() => Promise.all([
    expect(requestAandB()).resolves.toEqual('A2B2'),
    expect(requestBandC()).resolves.toEqual('B2C2'),
  ])),

]));
