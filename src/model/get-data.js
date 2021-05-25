const { wait } = require('../util/wait.js');

const WAIT_MIN = 600;
const WAIT_MAX = 900;

const counters = {};

/**
 * Mocks loading data asynchronously. Results indicate how often the function has been called
 *
 * @returns {String} Returns a input value with a counter
 *
 * @example
 * // calling the function returns "A1"
 * await mockLoading('A');
 * // calling it the second time returns "A2"
 * await mockLoading('A');
 */
async function mockLoading(str) {
  // introduce some latency
  const waitDuration = Math.round(Math.random() * (WAIT_MAX - WAIT_MIN)) + WAIT_MIN;
  await wait(waitDuration);
  // create or increase counter every time the function is being called
  counters[str] = counters[str] === undefined ? 1 : counters[str] + 1;
  return str + counters[str];
}

module.exports = {
  loadDataA: async () => mockLoading('A'),
  loadDataB: async () => mockLoading('B'),
  loadDataC: async () => mockLoading('C'),
}