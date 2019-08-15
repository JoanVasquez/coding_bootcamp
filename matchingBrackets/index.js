let matchingBracket = str => {
  let specialChars = cleanStr(str);
  let openingChars = [];
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of specialChars) {
    if (char === '(' || char === '{' || char === '[') openingChars.push(char);
    else {
      let lastChar = openingChars.pop();
      if (char !== map[lastChar]) return false;
    }
  }

  return openingChars.length === 0;
};

let cleanStr = str => {
  let specialChars = [];
  str.split('').forEach(char => {
    if (
      char === '{' ||
      char === '(' ||
      char === '[' ||
      char === '}' ||
      char === ')' ||
      char === ']'
    ) {
      specialChars.push(char);
    }
  });
  return specialChars;
};

module.exports = matchingBracket;
