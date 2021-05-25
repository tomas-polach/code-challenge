const { loadDataA, loadDataB, loadDataC } = require('./model/get-data.js');

/**
 * 1. Retrieves the cached results from loadDataA and loadDataB
 * 2. Returns both results as concatinated string
 *
 * @returns {String}
 *
 * @example
 * // calling the function the first time returns "A1B1"
 * await requestAandB();
 * // calling it 510ms later returns "A2B2"
 * await new Promise((resolve) => setTimeout(resolve, 510));
 * await requestAandB();
 */
async function requestAandB() {
  // TODO: Add code here, then run `npm test`
}

/**
 * 1. Retrieves the cached results from loadDataB and loadDataC
 * 2. Returns both results as concatinated string
 *
 * @returns {String}
 *
 * @example
 * // calling the function the first time returns "B1C1"
 * await requestBandC();
 * // calling it 510ms later returns "B2C2"
 * await new Promise((resolve) => setTimeout(resolve, 510));
 * await requestBandC();
 */
async function requestBandC() {
  // TODO: Add code here, then run `npm test`
}

module.exports = { requestAandB, requestBandC }