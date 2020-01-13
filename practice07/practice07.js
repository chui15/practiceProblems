function translate(string) {
  var stringArr = string.split(' ');
  var word = null;
  var newWord = null;
  var firstLetter = null;
  var remaining = null;
  var output = '';
  for (var i = 0; i < stringArr.length; i++) {
    word = stringArr[i];
    remaining = word.slice(1);
    firstLetter = word.substring(0, 1).toLowerCase();
    newWord = remaining + firstLetter + "ay ";
    output += newWord;
  }
  console.log(output);
}

var test = "Hello there";
console.log(translate(test));
