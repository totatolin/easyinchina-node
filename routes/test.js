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
  console.log(res);
  // res.header("X-Powered-By",' 3.2.1');
	db.query("select * from user",function(err,rows){
    if(err){
      res.send();
    }else {
      res.send(rows);
    }
    console.log(rows);
  });
});

export default router