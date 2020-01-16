function math_sequences(a,b) {
  var output = [];
  var sum = '' + a + '+' + b + '=' + (a + b);
  var difference = '' + a + '-' + b + '=' + (a - b);
  var multiplied = '' + a + '*' + b + '=' + (a * b);
  var divided = '' + a + '/' + b + '=' + (a/b.toFixed(1));
  output = [sum, difference, multiplied, divided];
  return output;
}
