module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];
  let array = [];

  for (let i = 0, length = str.length; i < length; i++) {
    array.push(str[i]);
  }
  if (array.length % 2 !== 0) {
      return false;
  }
  for (let i = 0, length = bracketsConfig.length; i < length; i++) {
      openBrackets.push(bracketsConfig[i][0]);
      closeBrackets.push(bracketsConfig[i][1]);
  }
  for (let i = array.length - 1; i >= 0; i--) {
          for (let j = 0, length = openBrackets.length; j < length; j++) {
              if (array[i] === openBrackets[j] && array[i + 1] === closeBrackets[j]) {
                array.splice(i, 2);
              }
          }
  }
  return (array.length === 0);
}
