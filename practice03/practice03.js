function groupArray(array) {
  var strings = [];
  var numbers = [];
  var booleans = [];
  var finalOutput = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      strings.push(array[i]);
    } else if (typeof array[i] === 'boolean') {
      booleans.push(array[i]);
    } else if (typeof array[i] === 'number') {
      numbers.push(array[i]);
    }
  }
  finalOutput.push(strings, numbers, booleans);
  return finalOutput;
}

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
var test = groupArray(myArray);
console.log(test);
