import express from 'express'
const router = express.Router();
var db = require('../config/mysqlDB.js');

// app.all('*', function (req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//  res.header("X-Powered-By",' 3.2.1');
//  if(req.method=="OPTIONS") {
//    res.send(200);
//  } else {
//    next();
//  }
// });



router.get('/test', function(req, res, next) {
  let aaa = "CREATE TABLE account(" +
        "id INT NOT NULL AUTO_INCREMENT," +
        "email varchar(100) unique," +
        "username varchar(64) unique," +
        "password varchar(32)," +
        "primary key (id)" +
        ")";
  // res.header("X-Powered-By",' 3.2.1');
	db.query(aaa,function(err,rows){
    if(err){
      res.send({status: 'failed'});
    }else {
      res.send({status: 'success'});
    }
  });
});

export default router