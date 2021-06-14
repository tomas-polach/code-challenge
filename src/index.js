const getData = require('./model/get-data.js');
const { wait } = require('./util/wait.js');

const Mutex = require('async-mutex').Mutex;
const mutex = new Mutex();

const now = Date.now();
const cacheTimer = 500; //ms
const expiration = now + cacheTimer;
const cache = {
	a: {
		expiration
	},
	b: {
		expiration
	},
	c: {
		expiration
	}
};

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
	const promises = [process('a'), process('b')];
	await Promise.all(promises);

	return cache.a.value + cache.b.value;
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
	const promises = [process('b'), process('c')];
	await Promise.all(promises);

	return cache.b.value + cache.c.value;
}

/**
 * Update cache function
 *
 * @param {string} v - a, b or c
 */
const process = async v => {
	if (!v in ['a', 'b', 'c']) return;

	// we lock the execution timestamp
	const now = Date.now();

	// we wait for mutex
	const release = await mutex.acquire();

	try {
		// if the cache is expired, we clear value and set up new expiration date
		if (now > cache[v].expiration) {
			cache[v].value = null;
			cache[v].expiration = now + cacheTimer;
		}

		// more check could be used there to see if the function is defined
		if (!cache[v].value) cache[v].value = await getData?.['loadData' + v.toUpperCase()]?.();
	}
	finally {
		// always release mutex to avoid deadlock
		release();
	}
}

module.exports = { requestAandB, requestBandC }
