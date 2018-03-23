import express from 'express';
import fs from 'fs';
const router = express.Router();
var db = require('../config/mysqlDB.js');
import list from '../models/list.js';

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
  let aaa = "CREATE TABLE list(" +
        "name varchar(100) ," +
        "description varchar(64)" +
        ")";
  // res.header("X-Powered-By",' 3.2.1');
	db.query(aaa,function(err,rows){
    if(err){
      res.send({status: 'failed'});
    }else {
      list.forEach((item) => {
        let bbb = "INSERT INTO list" +
        "(name, description)" +
        "value" +
        "('" + item.name + "', '" + item.description + "');"
        db.query(bbb,function(err,rows){
          console.log(err)
          if (err) {
            // res.send(err);
          } else {
            // res.send({status: 'success'});
          }
        });
      })
      res.send({status: 'success'});
    }
  });
  // var content = fs.readFileSync('./1.png', 'binary');
  // res.writeHead(200, {'Content-Type':'image/png'})
  // res.write(content, 'binary');
  // res.send();
});

export default router