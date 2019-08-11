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

module.exports = solutionTwo;
