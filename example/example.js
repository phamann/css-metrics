var CSSMetrics = require('../css-metrics');

var stats = new CSSMetrics('./css/style.css').stats();

var fail = "[FAIL]",
    failure = false;

var maxStats = {
  rules: 5,
  totalSelectors: 5,
  averageSelectors: 2
};


console.log("Checking CSS metrics...");

var str;

for (var k in maxStats) {
  str = "";
  if(stats[k] > maxStats[k]) {
     str += fail;
     failure = true;
  }
  str += " " + k + " = " + stats[k]
  console.log(str);
}

process.exit(failure);
