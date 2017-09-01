var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

const toLyrics = require('../lib/tolyrics');


describe("toLyrics: ", function () {
  it("get lyrics of given 0", function () {
    const result = toLyrics(0);
    const expect_string = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    expect(expect_string).to.equal(result);
  });

  it("get lyrics of given 1", function () {
    const result = toLyrics(1);
    const expect_string = `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    expect(expect_string).to.equal(result);
  });

  it("get lyrics of given 2", function () {
    const result = toLyrics(2);
    const expect_string = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
    expect(expect_string).to.equal(result);
  });
});