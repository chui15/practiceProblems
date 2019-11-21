// Create a function, add_arrays(), that does the following:

// #### Input: 2 arrays of equal size
//   - first_array, an array of numbers
//     - needle array, an array of numbers

// #### Output:
// - output array, which has all values from the first array added to the values from the second array

var first_array = [1, 2, 3, 4, 5]
var second_array = [6, 7, 8, 9, 10];
var output = [];

function add_arrays(){
  for (i = 0; i < first_array.length; i++){
    output[i] = first_array[i] + second_array[i];
  }
  return output;
}

var output = add_arrays(first_array, second_array);
console.log(output);

// #### Example:
// var first_array = [3, -5, 15, 4];
// var second_array = [3, 18, -5, -4]


// output = add_arrays(first_array, second_array);
// console.log(output); //outputs [6,13,10,0];

// #### Put your solution in answer.js
