const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '54196048',
  database : 'social_media_website'
});
connection.connect((err)=>{
  err?console.log(err):console.log("database Connected");
})
module.exports = connection;