var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_hollingx',
  password        : '7635',
  database        : 'cs290_hollingx'
});

module.exports.pool = pool;
