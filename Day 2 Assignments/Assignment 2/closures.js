// A closure is when an inner function remembers variables from its outer function
function createCounter() {
    let count = 0; // This variable is in outer function
  
    // Inner function forms a closure and remembers "count"
    function increment() {
      count = count + 1;
      console.log("Current count is:", count);
    }
    return increment;
  }
  
  const counter1 = createCounter();
  
  // Every time we call counter1(), it will remember the previous value of count
  counter1(); // 1
  counter1(); // 2
  counter1(); // 3
  
  // Explain how inner functions access outer variables 
  // The inner function "increment" can still access "count" even after createCounter() has finished running. This is because of closure.
  // JavaScript keeps the variables from outer function alive as long as the inner function that uses them is still in use.
  // This is why "count" keeps increasing every time we call counter1().