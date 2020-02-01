

function removeClassFromElement(element, classToRemove){
  var targetElement = $(element);
  targetElement.removeClass(classToRemove);
}

function toggleClassOnElement(element, classToToggle){
  var targetElement = $(element);
  targetElement.toggleClass(classToToggle);
}

function hideElements(element, removalType){
  var targetElement = $(element);
  if (removalType === 'hide') {
    targetElement.hide();
  } else if (removalType === 'removeChildren') {
    targetElement.empty();
  } else if (removalType === 'removeSelf') {
    targetElement.remove();
  }
}

function addAttributeToElement(element, attr, value){
  var targetElement = $(element);
  targetElement.attr(attr, value);
}

function putPosInElement(element){
  var targetElement = $(element);
  var position = targetElement.position();
  var output = {
    'x' : position.top,
    'y' : position.left
  }
  targetElement.text('x: ' + output.x + 'px' + ' ' + 'y: ' + output.y + 'px');
  return output;
}
