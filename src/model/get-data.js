const { wait } = require('../util/wait.js');

const WAIT_MIN = 600;
const WAIT_MAX = 900;

const counters = {};

/**
 * Mocks a data request with variating output, indicating how often the function has been called
 *
 * @returns {String} Returns a input value with a counter
 *
 * @example
 * // calling the function returns "A1"
 * await fakeDbQuery('A');
 * // calling it the second time returns "A2"
 * await fakeDbQuery('A');
 */
async function fakeDbQuery(str) {
  // introduce some latency
  const waitDuration = Math.round(Math.random() * (WAIT_MAX - WAIT_MIN)) + WAIT_MIN;
  await wait(waitDuration);
  // create or increase counter every time the function is being called
  counters[str] = counters[str] === undefined ? 1 : counters[str] + 1;
  return str + counters[str];
}

module.exports = {
  getA: async () => fakeDbQuery('A'),
  getB: async () => fakeDbQuery('B'),
  getC: async () => fakeDbQuery('C'),
}