const { getA, getB, getC } = require('./model/get-data.js');

/**
 * Retrieves the results from getA and getB, caches them and returns them as a concatenated string
 *
 * @returns {String}
 *
 * @example
 * // calling the function the first time returns "A1B1"
 * await getAandB();
 * // calling it 500ms later returns "A2B2"
 * await new Promise((resolve) => setTimeout(resolve, 500));
 * await getAandB();
 */
async function getAandB() {
  // TODO: Add code here, then run `npm test`
}

/**
 * Retrieves the results from getB and getC, caches them and returns them as a concatenated string
 *
 * @returns {String}
 *
 * @example
 * // calling the function the first time returns "B1C1"
 * await getBandC();
 * // calling it 500ms later returns "B2C2"
 * await new Promise((resolve) => setTimeout(resolve, 500));
 * await getBandC();
 */
async function getBandC() {
  // TODO: Add code here, then run `npm test`
}

module.exports = { getAandB, getBandC }