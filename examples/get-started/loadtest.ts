import loadtest, { LoadTestOptions, LoadTestResult } from 'loadtest';

(async function runBenchmark() {
  const options: LoadTestOptions = {
    url: 'http://localhost:3001/users',
    method: 'GET',
    concurrency: 100,
    maxRequests: 10000,
    contentType: 'application/json',
    agentKeepAlive: true,
    statusCallback(error: Error, result: any, latency: LoadTestResult) {
      console.log('Current latency %j, error %j', latency, error);
      console.log('----');
      console.log('Request elapsed milliseconds: ', result.requestElapsed);
      console.log('Request index: ', result.requestIndex);
      console.log('Request loadtest() instance index: ', result.instanceIndex);
    },
  };
  loadtest.loadTest(options, (error: Error) => {
    if (error) {
      return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
  });
})();

// {"totalRequests":10000,"totalErrors":0,"totalTimeSeconds":112.104754961,"rps":89,"meanLatencyMs":1116.3,"maxLatencyMs":2840,"minLatencyMs":61,"percentiles":{"50":1138,"90":1369,"95":1435,"99":1771},"errorCodes":{}},
// {"totalRequests":10000,"totalErrors":0,"totalTimeSeconds":130.051003802,"rps":77,"meanLatencyMs":1296.4,"maxLatencyMs":3051,"minLatencyMs":62,"percentiles":{"50":1284,"90":1656,"95":1764,"99":2538},"errorCodes":{}}
// {"totalRequests":10000,"totalErrors":0,"totalTimeSeconds":101.657589121,"rps":98,"meanLatencyMs":1013.5,"maxLatencyMs":3160,"minLatencyMs":75,"percentiles":{"50":973,"90":1215,"95":1296,"99":2192},"errorCodes":{}}
// {"totalRequests":10000,"totalErrors":0,"totalTimeSeconds":91.21390508900001,"rps":110,"meanLatencyMs":908.9,"maxLatencyMs":2640,"minLatencyMs":89,"percentiles":{"50":861,"90":1122,"95":1272,"99":1589},"errorCodes":{}}
// {"totalRequests":10000,"totalErrors":0,"totalTimeSeconds":84.016065521,"rps":119,"meanLatencyMs":837.9,"maxLatencyMs":3163,"minLatencyMs":89,"percentiles":{"50":802,"90":972,"95":1013,"99":1667},"errorCodes":{}}
// {"totalRequests":10000,"totalErrors":0,"totalTimeSeconds":106.607157735,"rps":94,"meanLatencyMs":1062.8,"maxLatencyMs":2579,"minLatencyMs":89,"percentiles":{"50":1000,"90":1408,"95":1562,"99":2058},"errorCodes":{}}
