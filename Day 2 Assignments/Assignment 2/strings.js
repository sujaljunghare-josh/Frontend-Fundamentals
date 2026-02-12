//Difference between == and ===

//== check for value only, if both the values are same irrespective of datatype, then it gives true else false
var check1 = '4' == 4;
console.log(check1);
//This will return true since, the value is same i.e. 4

//=== strictly checks for value and datatype as well
var check2 = '4' === 4;
console.log(check2);
//This will return false since, even though the values are same but datatypes differ.

//Convert 'hello world' to Title case
function toTitleCase(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  return words.join(' ');
}
  
const example = 'hello world';
console.log(toTitleCase(example)); // Output: "Hello World"