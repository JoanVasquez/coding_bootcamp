const repeatedItems = require("./index");

test("RepeatedItems function exists", () => {
  expect(repeatedItems).toBeDefined();
});

test("RepeatedItems handles 1 as an input", () => {
  expect(repeatedItems([1, 5, 3, 8])).toEqual(1);
});

test("RepeatedItems flips a positive number", () => {
  expect(repeatedItems([1, 5, 3, 8, 3])).toEqual(6);
  expect(repeatedItems([1, 5, 3, 8, 3, 8, 8])).toEqual(14);
});
