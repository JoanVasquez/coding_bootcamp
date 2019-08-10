let firstSolution = str => {
  let charMap = {};
  let maxChar = "";
  let max = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

module.exports = firstSolution;
