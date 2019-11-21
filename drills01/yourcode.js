var array1 = [4,2,3,6,7,1,8,10,9];

var array2 = [24,49,63,6,79,65,60,86,94,36,40,29,42,25,12,4,83,88,4,72];

function sumArray(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

function fitWithinVal(array, val){
  var sum2 = 0;
  var output = [];
  for (var j = 0; j < array.length; j++){
    sum2 += array[j];
    if (sum2 < val){
      output.push(array[j]);
    } else {
      sum2 -= array[j];
    }
  }
  return output;
}

function getAllNamesShorterThan(array, val){
  var nameLength = 0;
  var output = [];
  for (var nameIndex = 0; nameIndex < array.length; nameIndex++){
    nameLength = array[nameIndex].length;
    if (nameLength < val){
      output.push(array[nameIndex]);
    }
  }
  return output;
}

function makeLabel(details){
  var output = null;
  var name = details['greeting'] + ' ' + details['givenName'] + ' ' + details['familyName'] + '\n';
  var shippingAddress = details['home address']['streetNumber'] + ' ' + details['home address']['streetName'] + '\n';
  var city = details['home address']['city'] + ', ' + details['home address']['state'] + ' ' + details['home address']['zip'];
  output = name + shippingAddress + city;
  return output;
}
