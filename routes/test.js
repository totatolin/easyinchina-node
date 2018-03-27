import express from 'express';
import fs from 'fs';
const router = express.Router();
var db = require('../config/mysqlDB.js');
import list from '../models/shopList.js';
import redis from 'redis';
var client = redis.createClient('6379', '127.0.0.1');
// redis 链接错误
client.on("error", function(error) {
     console.log(error);
});

router.get('/test', function(req, res, next) {
  var qe = {a: 2, b:3, c:4};
  client.hmset('field003', qe, function(err, response) {
      console.log("err:", err);
      console.log("response:", response);
      client.hmget('field003', ['a', 'c'], function (err, res) {
          console.log(err);
          console.log(res);
          client.end();
      });
  });
  // let aaa = Object.keys(req.query)[0];
 //  let aaa = "CREATE TABLE list(" +
 //        "name varchar(100) ," +
 //        "description varchar(64)" +
 //        ")";
 //  // res.header("X-Powered-By",' 3.2.1');
	// db.query(aaa,function(err,rows){
 //    if(err){
 //      res.send({status: 'failed'});
 //    }else {
 //      list.forEach((item) => {
 //        let bbb = "INSERT INTO list" +
 //        "(name, description)" +
 //        "value" +
 //        "('" + item.name + "', '" + item.description + "');"
 //        db.query(bbb,function(err,rows){
 //          console.log(err)
 //          if (err) {
 //            // res.send(err);
 //          } else {
 //            // res.send({status: 'success'});
 //          }
 //        });
 //      })
 //      res.send({status: 'success'});
 //    }
 //  });
  // var content = fs.readFileSync('./' + aaa, 'binary');
  // res.writeHead(200, {'Content-Type':'image/png'})
  // res.write(content, 'binary');
  // res.send();

});

export default router