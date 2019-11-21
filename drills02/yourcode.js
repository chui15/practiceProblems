

function countOccurences(array, word){
  var output = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i].includes(word)) {
      output += 1;
    }
  }
  return output;
}

function wordLengths(array){
  var output = [];
  var wordLength = 0;
  for (var j = 0; j < array.length; j++){
    wordLength = array[j].length;
    output.push(wordLength);
    wordLength = 0;
  }
  return output;
}

function getMinMaxMean(array){
  var output = {};
  var min = Math.min(...array);
  var average = 0;
  var max = Math.max(...array);
  var sum = 0;
  for (var k = 0; k < array.length; k++){
    sum += array[k];
  }
  average = sum / array.length;
  output = {
    "min" : min,
    "max" : max,
    "mean" : average
  };
  return output;
}

function findMode(array){
  var a = [], b = 0, occurrence;
  for (var i = 0; i < array.length; i++) {
    if (a[array[i]] != undefined) {
      a[array[i]]++;
    } else {
      a[array[i]] = 1;
    }
  }
  for (var key in a) {
    if (a[key] > b) {
      b = a[key];
      occurrence = key;
    }
  }
  return Number.parseInt(occurrence);
}
