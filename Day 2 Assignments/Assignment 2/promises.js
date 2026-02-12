// Craete a function called getUserData that returns a Promise
// It will resolve with user details if userId is 1
// It will reject with an error message if userId is 0

function getUserData(userId) {
    return new Promise(function (resolve, reject) {
      // We are simulating some async operation like API call
      setTimeout(function () {
        if (userId === 1) {
          // Success case
          const user = {
            name: "Akshay",
            age: 25,
            city: "Pune"
          };
          resolve(user);
        } else if (userId === 0) {
          // Error case for userId = 0
          reject("Invalid userId. It cannot be 0.");
        } else {
          // Any other userId we will treat as not found
          reject("User not found for given userId.");
        }
      }, 1000); // wait 1 second just to feel like async
    });
  }
  
  // Handle the response using .then() and .catch()
  
  // Example: success case
  getUserData(1)
    .then(function (user) {
      console.log("User data resolved from Promise:");
      console.log(user);
    })
    .catch(function (error) {
      console.log("Error from Promise:");
      console.log(error);
    });
  
  // Example: error case
  getUserData(0)
    .then(function (user) {
      console.log("User data:", user);
    })
    .catch(function (error) {
      console.log("Error when userId is 0:");
      console.log(error);
    });
  
  // Execution sequence of this code
  console.log("1: Start");
  
  setTimeout(function () {
    console.log("2: setTimeout");
  }, 0);
  
  Promise.resolve().then(function () {
    console.log("3: Promise");
  });
  
  console.log("4: End");
  
  // Output order will be:
  // 1: Start
  // 4: End
  // 3: Promise
  // 2: setTimeout
  //
  // Reason:
  // - Normal console.log runs first (synchronous).
  // - Promise callbacks (then) run in microtask queue (before setTimeout).
  // - setTimeout callback runs later in macrotask queue.