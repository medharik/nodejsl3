var express = require('express');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'lara3db'
});
 
connection.connect();
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
app.get('/departements', function(req, res) {
    connection.query('SELECT * from departements', function (error, results, fields) {
        if (error) throw error;        
       res.send(results)
      });
       
  
  
 
});
app.get('/kamal', function(req, res) {
  res.send('hello kamal');
});
app.get('/sarr', function(req, res) {
  res.send('hello sarr');
}); 
app.post('/aya', function(req, res) {
  res.send('hello aya');
});  

app.listen(6500);