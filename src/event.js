var addEventListener = (element, type, callback) => {
  if (element.addEventListener) {
    element.addEventListener(type, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, callback);
  } else {
    element['on' + type] = callback;
  }
}

module.exports = addEventListener