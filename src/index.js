const getData = require('./model/get-data.js');
const { wait } = require('./util/wait.js');
const mutexify = require('mutexify/promise')
const lock = mutexify();

const cacheTimer = 500; //ms
const cache = {
	a: {
		expiration: 0
	},
	b: {
		expiration: 0
	},
	c: {
		expiration: 0
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
	const now = Date.now();
	const promises = [process('a', now), process('b', now)];
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
	const now = Date.now();
	const promises = [process('b', now), process('c', now)];
	await Promise.all(promises);

	return cache.b.value + cache.c.value;
}

/**
 * Update cache function with mutex
 *
 * @param {string} v - a, b or c
 */
const process = async (v, now) => {
	if (!v in ['a', 'b', 'c']) return;

	// named lock would be better
	const release = await lock();

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
		release();
	}

}

module.exports = { requestAandB, requestBandC }
