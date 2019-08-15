// "{klk[tu](l)}" -> true
// "({l)}" -> false

const matchingBrackets = require('./index');

test('MatchingBrackets function exists', () => {
  expect(matchingBrackets).toBeDefined();
});

test('MatchingBrackets handles 1 as an input', () => {
  expect(matchingBrackets('{klk[tu](L)}')).toEqual(true);
  expect(matchingBrackets('({L)}')).toEqual(false);
});
