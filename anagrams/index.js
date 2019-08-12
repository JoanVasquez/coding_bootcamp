let solutionOne = (strOne, strTwo) => {
  const strOneMap = buildCharMap(strOne);
  const strTwoMap = buildCharMap(strTwo);

  if (Object.keys(strOneMap).length !== Object.keys(strTwoMap).length)
    return false;
  for (let key in strOneMap)
    if (strTwoMap[key] !== strOneMap[key]) return false;

  return true;
};

let buildCharMap = str => {
  let charMap = {};
  for (let item of str.replace(/[^\w]/g, "").toLowerCase())
    charMap[item] = charMap[item] + 1 || 1;
  return charMap;
};

let solutionTwo = (strOne, strTwo) => {
  return cleanStr(strOne) === cleanStr(strTwo);
};

let cleanStr = str => {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
};

module.exports = solutionTwo;
