var parse = require('css-parse'),
    fs = require('fs');

/* path is a path to the CSS file we are analyzing */
function CSSMetrics (path) {
  this.path = path;
}

CSSMetrics.prototype = {

  constructor: CSSMetrics,

  /* Convenience method. Returns the result from
     css-parse and nothing more. */
  parse: function () {
    var contents = fs.readFileSync(this.path);
    return parse(contents);
  },


  /* The stats() method runs the parser, computes metrics, and returns an
     object containing said metrics, in the format:

     {
       rules: [NUMBER], (total number of rules parsed)
       totalSelectors: [NUMBER], (total number of selectors parsed)
       averageSelectors: [NUMBER] (the mean number of selectors per rule)
     }
  */
  stats: function () {

    var parsed = this.parse().stylesheet,
        rules = parsed.rules.length,
        totalSelectors = 0,
        averageSelectors;

    for(var i=0; i < rules; i++) {
      totalSelectors += parsed.rules[i].selectors.length;
    }

    averageSelectors = +(totalSelectors / rules).toFixed(3);

    return {
      rules: rules,
      totalSelectors: totalSelectors,
      averageSelectors: averageSelectors
    };

  },

  /* Returns a pretty print version of the stats, suitable for your
     CI system of choice. */
  prettyPrint: function () {

    var stats = this.stats();

    return new String ("### CSS Stats ###" +
           "\nTotal rules: " + stats.rules +
           "\nTotal selectors: " + stats.totalSelectors +
           "\nAverage selectors per rule: " + stats.averageSelectors);
  }

};

module.exports = exports = CSSMetrics;
