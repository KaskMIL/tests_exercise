const capitalize = str => {
  const newStr = str.split('');
  newStr[0] = newStr[0].toUpperCase();
  return newStr.join('');
};

module.exports = capitalize;