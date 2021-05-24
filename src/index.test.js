const { wait } = require('./util/wait.js');
const { getAplusB, getBplusC } = require('./index.js');

async function getAt(duration) {
  await wait(duration);
  return Promise.all([ getAplusB(), getBplusC()]);
}

test('Test cache timings ', async () => Promise.all([
  expect(getAt(0)).resolves.toEqual(['A1B1', 'B1C1']),
  expect(getAt(200)).resolves.toEqual(['A1B1', 'B1C1']),
  expect(getAt(480)).resolves.toEqual(['A1B1', 'B1C1']),
  // cache expires after 490 ms
  expect(getAt(500)).resolves.toEqual(['A2B2', 'B2C2']),
  expect(getAt(700)).resolves.toEqual(['A2B2', 'B2C2']),
  expect(getAt(980)).resolves.toEqual(['A2B2', 'B2C2']),
  // cache expires after 490 ms
  expect(getAt(1000)).resolves.toEqual(['A3B3', 'B3C3']),
  expect(getAt(1200)).resolves.toEqual(['A3B3', 'B3C3']),
  expect(getAt(1480)).resolves.toEqual(['A3B3', 'B3C3']),
  // cache expires after 490 ms
  expect(getAt(1500)).resolves.toEqual(['A4B4', 'B4C4']),
]));