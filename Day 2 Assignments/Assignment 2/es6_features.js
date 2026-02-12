const user = {
    name: "Akshay",
    age: 25,
    city: "Pune"
  };
  
  // Destructure an object and console name and age from it
  // This is a shorter way to pull values from object into variables
  const { name, age } = user;
  
  console.log(name); // Akshay
  console.log(age);  // 25
  
  // Merge two arrays using spread operator
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  // ...arr1 and ...arr2 "spread" the elements into a new array
  const mergedArray = [...arr1, ...arr2];
  
  console.log("Merged array using spread operator:");
  console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
  
  // Create a function accepting 5 numbers using rest parameters and display sum of all numbers
  // Rest parameter collects all arguments into an array named "numbers"
  function sumFiveNumbers(...numbers) {
    // We expect 5 numbers but this will work for any count
    let sum = 0;
  
    numbers.forEach(function (num) {
      sum = sum + num;
    });
  
    console.log("Sum of given numbers is:", sum);
  }
  
  // Call function with 5 numbers
  sumFiveNumbers(10, 20, 30, 40, 50);