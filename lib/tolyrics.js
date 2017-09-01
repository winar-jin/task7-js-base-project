const _ = require('lodash');

function range(amount) {
  const array = new Array(amount).fill().map((_, i) => amount - i);
  array.push(0);
  return array;
}

module.exports = toLyrics = (amount) => {
  return range(amount).map(amount => toLyric(amount)).join('\n');
};


function toLyric(amount) {
  let firstLine = `${_.capitalize(withUnit(amount))} of beer on the wall, ${withUnit(amount)} of beer.`;
  let secondLine = `Take one down and pass it around, ${withUnit(amount - 1)} of beer on the wall.`;
  if (amount === 0) {
    secondLine = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
  }
  return firstLine + '\n' + secondLine;
}

function withUnit(amount) {
  if (amount > 1) {
    return `${amount} bottles`;
  }
  if (amount === 1) {
    return `1 bottle`;
  }
  return `no more bottles`;
}