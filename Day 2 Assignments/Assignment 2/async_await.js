function getUserData(userId) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (userId === 1) {
          resolve({
            name: "Akshay",
            age: 25,
            city: "Pune"
          });
        } else if (userId === 0) {
          reject("Invalid userId. It cannot be 0.");
        } else {
          reject("User not found for given userId.");
        }
      }, 1000);
    });
  }
  
  // Convert the earlier Promise usage to async/await with try-catch
  
  async function showUserData(userId) {
    try {
      console.log("Fetching user data using async/await...");
      const user = await getUserData(userId); // wait for Promise to resolve
      console.log("User data received:");
      console.log(user);
    } catch (error) {
      // If Promise rejects, we come here
      console.log("Error while fetching user data:");
      console.log(error);
    }
  }
  
  // Call with success case
  showUserData(1);
  
  // Call with error case
  showUserData(0);