var CSSMetrics = require('../css-metrics');

var myMetrics = new CSSMetrics('./css/style.css');

if (myMetrics.stats().rules > 3 ) {
  console.log("oh noes, we have more than three rules! time to do some cleanup");
}
