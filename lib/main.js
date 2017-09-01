function printLyrics(count) {
    let cycle = getLyrics(count);
    return cycle;
}

function getLyrics(count) {
    let result = [];
    for (let i = count; i >= 0; i--) {
        result.push(singleLyrics(i));
    }
    return result.join('\n');
}

function singleLyrics(number) {
    return number ?
        `${number} ${number>1 ? 'bottles' : 'bottle'} of beer on the wall, ${number} ${number>1 ? 'bottles' : 'bottle'} of beer.
Take one down and pass it around, ${number-1 ? number-1 : 'no more'} ${number-1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.` :
        `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
}

module.exports = printLyrics;