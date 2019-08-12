let solutionOne = (arr, size) => {
  let chunked = [];

  arr.forEach(item => {
    const lastChunked = chunked[chunked.length - 1];
    if (!lastChunked || lastChunked.length === size) chunked.push([item]);
    else lastChunked.push(item);
  });

  return chunked;
};

let solutionTwo = (arr, size) => {
  let chunked = [];

  arr.forEach((item, index) => {
    if (index === 0 || index % size === 0) {
      chunked.push([]);
    }
    chunked[chunked.length - 1].push(item);
  });
  return chunked;
};

//Changed and remove items from arr...
let solutionThree = (arr, size) => {
  let chunked = [];
  while (arr.length > 0) chunked.push(arr.splice(0, size));
  return chunked;
};

let solutionFour = (arr, size) => {
  let chunked = [];
  for (let index = 0; index < arr.length; index += size)
    chunked.push(arr.slice(index, index + size));
  return chunked;
};

module.exports = solutionFour;
