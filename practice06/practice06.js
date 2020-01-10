// F(n) = F(n-1) + F(n-2)
function fibSequence(number) {
  var a = 0;
  var b = 1;
  var temp;
  var output = '';

  while (number >= 0) {
    temp = a;
    a = a +b ;
    b = temp;
    number--;
    output += b;
  }

  return output;
}

var test = fibSequence(12);
console.log(test);
