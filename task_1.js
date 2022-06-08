const stringLength = str => {
  if(str.length >= 1 && str.length <= 10) {
    return str.length;
  } else {
    return -1;
  }
}

module.exports = stringLength;