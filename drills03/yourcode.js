

function getPath(array){
  var output = array.split('/');
  return output;
}

function getPathParts(array){
  var parts = getPath(array);
  var portPosition = parts[2].indexOf(':');
  var host = parts[2].slice(0, portPosition);
  var port = Number.parseInt((parts[2].slice(portPosition+1)));
  var output = {
    "protocol" : parts[0].slice(0, -1),
    "host": host,
    "port": port,
    "path": parts[3],
    "file": parts[4]
  };
  return output;
}

function getCapitalCount(array){
  var output = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] === array[i][0].toUpperCase()) {
      output++;
    }
  }
  return output;
}

function correctCalcChecker(){

}

function doMath(){

}
