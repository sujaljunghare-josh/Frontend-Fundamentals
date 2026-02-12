function runAfterTenSeconds(callback) {
    console.log("I will run your callback after 10 seconds...");
  
    // setTimeout runs the given function after the specified time (in milliseconds)
    setTimeout(function () {
      console.log("10 seconds completed. Now running the callback function.");
      callback(); // execute the callback
    }, 10000); // 10000 ms = 10 seconds
  }
  
  // Example callback function
  function myCallback() {
    console.log("This is the callback function. It ran after 10 seconds.");
  }
  
  runAfterTenSeconds(myCallback);