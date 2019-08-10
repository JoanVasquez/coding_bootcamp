let firstSolution = num => {
  let result = parseInt(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  //if (num < 0) return -result;
  //return result;
  return result * Math.sign(num);
};

module.exports = firstSolution;
