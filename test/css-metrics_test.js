var expect = require('expect.js'),
    CSSStat = require('../css-metrics');

describe('CSSStat', function () {

  var stat;

  beforeEach(function () {
    stat = new CSSStat('./test/zengarden-sample.css');
  });

  describe("stats()", function () {
    var stats;

    beforeEach(function () {
      stats = stat.stats();
    });

    it("returns the number of rules", function () {
      expect(stats.rules).to.be(37);
    });

    it("returns the total selectors", function () {
      expect(stats.totalSelectors).to.be(42);
    });

    it("returns the average number of selectors", function () {
      expect(stats.averageSelectors).to.be(1.135);
    });

  });

  describe("prettyPrint()", function () {
    var retval;

    beforeEach(function () {
      retval = stat.prettyPrint();
    });

    it("returns a string value", function () {
      expect(retval).to.be.a(String);
    });

  });

});
