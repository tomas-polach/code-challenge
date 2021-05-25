const { getA, getB, getC } = require('./model/get-data.js');

/**
 * Retrieves the results from getA and getB, caches them and returns them as a concatenated string
 *
 * @returns {String}
 *
 * @example
 * // calling the function the first time returns "A1B1"
 * await getAplusB();
 * // calling it 500ms later returns "A2B2"
 * await new Promise((resolve) => setTimeout(resolve, 500));
 * await getAplusB();
 */
async function getAplusB() {
  // TODO: Add code here, then run `npm test`
}

/**
 * Retrieves the results from getB and getC, caches them and returns them as a concatenated string
 *
 * @returns {String}
 *
 * @example
 * // calling the function the first time returns "B1C1"
 * await getBplusC();
 * // calling it 500ms later returns "B2C2"
 * await new Promise((resolve) => setTimeout(resolve, 500));
 * await getBplusC();
 */
async function getBplusC() {
  // TODO: Add code here, then run `npm test`
}

module.exports = { getAplusB, getBplusC }