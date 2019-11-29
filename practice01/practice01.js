function biggerWords(string, array) {
  var output = [];
  var wordLength = null;
  for (var i = 0; i < array.length; i++){
    wordLength = array[i].length;
    if (wordLength > string.length){
      output.push(array[i]);
    }
  }
  return output;
}
