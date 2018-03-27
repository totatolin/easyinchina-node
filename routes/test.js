import express from 'express';
import fs from 'fs';
const router = express.Router();
var db = require('../config/mysqlDB.js');
import list from '../models/shopList.js';

router.get('/test', function(req, res, next) {
  let aaa = Object.keys(req.query)[0];
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
  var content = fs.readFileSync('./' + aaa, 'binary');
  res.writeHead(200, {'Content-Type':'image/png'})
  res.write(content, 'binary');
  res.send();
});

export default router