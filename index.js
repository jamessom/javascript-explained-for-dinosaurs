// index.js
import moment from 'moment';

var firula = "------";
console.log(`${firula} Hello from JavaScript! ${firula}`);

var time = moment().startOf('day').fromNow()
console.log(`Somewhare at time... ${time}`);