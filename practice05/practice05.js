function FizzBuzz() {
  var output;
  for (var i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      output = 'FizzBuzz';
    } else if (i % 5 === 0) {
      output = 'Buzz';
    } else if (i % 3 === 0) {
      output = 'Fizz';
    } else {
      output = i;
    }
    console.log(output);
  }
}

var test = FizzBuzz();

console.log(test);
