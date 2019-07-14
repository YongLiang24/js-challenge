
//use the following setup to test the time complexity of the code
//use function performanceTimer() to wrap around the code you are testing

function performanceTimer(){
  
  let timestart = performance.now();

//run code blocks here

  let timeend = performance.now();

  return console.log(`Time Elapsed: ${(timestart - timeend) / 1000} seconds`)
}

performanceTimer()
