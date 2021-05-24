const { wait } = require('../util/wait.js');

const WAIT_MIN = 100;
const WAIT_MAX = 900;

const counters = {};
async function fakeDbQuery(str) {
  await wait(Math.round(Math.random() * (WAIT_MAX - WAIT_MIN)) + WAIT_MIN);
  counters[str] = counters[str] === undefined ? 1 : counters[str] + 1;
  return str + counters[str];
}

module.exports = {
  getA: async () => fakeDbQuery('A'),
  getB: async () => fakeDbQuery('B'),
  getC: async () => fakeDbQuery('C'),
}