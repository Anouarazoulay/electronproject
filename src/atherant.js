const {app, BrowserWindow, remote, ipcRenderer} = require('electron')

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "test"
});


app.post('/myaction', function(req, res) {
  console.log('req.body');
  console.log(req.body);
  res.write('You sent the name "' + req.body.nom+'".\n');
  res.write('You sent the Email "' + req.body.mdps+'".\n');
  res.end()
  
  mysql.query("INSERT INTO `et`(`nom`,`mdps`) VALUES ('"+req.body.nom+"','"+req.body.mdps+"')",function(err, result)      
  {                                                      
    if (err)
       throw err;
  });
  });

module.exports = router;

