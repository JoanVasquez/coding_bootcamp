let repeatedItems = arr => {
  let counterMap = {};
  let maxRepeated = 1;
  let repeated = 0;
  let result = 0;

  for (let item of arr) counterMap[item] = counterMap[item] + 1 || 1;

  for (let key in counterMap)
    if (counterMap[key] > maxRepeated) {
      maxRepeated = counterMap[key];
      repeated = parseInt(key);
    }

  if (maxRepeated === 1) return 1;
  else if (maxRepeated >= 2) {
    for (let i = 0; i < arr.length; i++) {
      let actualItem = arr[i];
      if (maxRepeated === 2) {
        if (actualItem === repeated) result += actualItem;
      } else {
        if (actualItem === repeated) result += i;
      }
    }
  }

  return result;
};

module.exports = repeatedItems;
