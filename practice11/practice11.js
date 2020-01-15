function evenOdd(array) {
  var odds = [];
  var evens = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      if (array[i] % 2 === 0 && !evens.includes(array[i])) {
        evens.push(array[i]);
      } else if (!odds.includes(array[i]) && !evens.includes(array[i])) {
        odds.push(array[i]);
      }
    }
  }
  var output = {
    odds: odds,
    evens: evens
  };
  return output;
}
