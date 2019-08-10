let firstSolution = str =>
  str
    .split("")
    .reverse()
    .join("");

let secondSolution = str => {
  let reversed = "";
  for (let char of str) reversed = char + reversed;
  return reversed;
};

let thirdSolution = str =>
  str.split("").reduce((reversed, char) => char + reversed, "");

module.exports = thirdSolution;
