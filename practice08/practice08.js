function character_convert(string) {
  var word = null;
  var output = '';
  for (var i = 0; i < string.length; i++) {
    word = string.charCodeAt(i);
    output += word;
  }
  console.log(output);
}

var test = character_convert('the cat in the hat');
console.log(test);
