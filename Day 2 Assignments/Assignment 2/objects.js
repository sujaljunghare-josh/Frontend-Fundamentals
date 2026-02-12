const user = {
    name: "Akshay",
    age: 25,
    city: "Pune"
  };
  
  console.log("Original user object:");
  console.log(user);
  
  // Print all keys and values using Object.keys, Object.values and forEach
  
  // Object.keys gives us an array of all keys in the object
  const userKeys = Object.keys(user);
  console.log("Keys:", userKeys);
  
  // Object.values gives us an array of all values in the object
  const userValues = Object.values(user);
  console.log("Values:", userValues);
  
  // We can loop over keys array and print key : value pairs
  userKeys.forEach(function (key) {
    console.log(key + " :", user[key]);
  });
  
  // Add new property mobileNumber dynamically
  user.mobileNumber = "9876543210";
  console.log("After adding mobileNumber:");
  console.log(user);
  
  // Delete city property dynamically
  delete user.city;
  console.log("After deleting city:");
  console.log(user);
  
  // Convert array of objects into an object grouped by role
  const users = [
    { name: "Pratik", role: "admin" },
    { name: "Amit", role: "user" },
    { name: "Neha", role: "admin" },
    { name: "Ravi", role: "user" }
  ];

  const usersGroupedByRole = {};
  users.forEach(function (person) {
    const role = person.role;
  
    // If this role is not present yet, create an empty array for it
    if (!usersGroupedByRole[role]) {
      usersGroupedByRole[role] = [];
    }
    usersGroupedByRole[role].push(person);
  });
  
  console.log("Users grouped by role:");
  console.log(usersGroupedByRole);