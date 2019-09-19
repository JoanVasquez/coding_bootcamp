// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function solutionOne(str) {
  let chars = str.split('');
  chars[0] = chars[0].toUpperCase();

  chars.forEach((char, index) => {
    if (char === ' ') {
      chars[index + 1] = chars[index + 1].toUpperCase();
    }
  });

  return chars.join('');
}

function solutionTwo(str) {
  let words = [];
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

function solutionThree(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = solutionThree;
