const _ = require('lodash');

module.exports = toLyrics = (amount) => {
  return range(amount).map(amount => toLyric(amount)).join('\n');
};

function range(amount) {
  const array = new Array(amount).fill().map((_, i) => amount - i);
  array.push(0);
  return array;
}


function toLyric(amount) {
  let firstLine = `${_.capitalize(withUnit(amount))} of beer on the wall, ${withUnit(amount)} of beer.`;
  let secondLine = `Take one down and pass it around, ${withUnit(amount - 1)} of beer on the wall.`;
  if (amount === 0) {
    secondLine = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
  }
  return firstLine + '\n' + secondLine;
}

function withUnit(amount) {
  return amount > 1 ? `${amount} bottles` :
    amount === 1 ? `1 bottle` : `no more bottles`;
}