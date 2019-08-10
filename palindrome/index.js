let firstSolution = str => {
  let tmpStr = str
    .split("")
    .reverse()
    .join("");
  return tmpStr === str;
};

let secondSolution = str =>
  str.split("").every((char, index) => char === str[str.length - index - 1]);

module.exports = secondSolution;
