# Code Challenge

Implement two requests, loading data from various sources cached for 500ms.

## Task:

1. Look at the test in [src/index.test.js](src/index.test.js). The test is designed to validate the caching behavior
of the two functions `requestAandB` and `requestBandC`. Make sure you understand how the test works and what the two
functions are supposed to return in different points in time.

2. Clone the repo and run `npm install`

3. Add code in [src/index.js](src/index.js) completing the two functions `requestAandB` and `requestBandC` so that:
  - running the test with `npm test` passes successfuly
  - `loadDataA`, `loadDataB` and `loadDataC` is being cached for 500ms (used only once in 500ms)
