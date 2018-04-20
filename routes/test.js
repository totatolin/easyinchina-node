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
  client.del('redisData', function(err) {
    console.log(err)
  })
  // client.hmset('sessionid', { password: 'password' }, function(err) {
  //   console.log(err)
  // })
  // client.hgetall('sessionid', function(err, object) {
  //   console.log(object)
  // })
  // var qe = {a: 2, b:3, c:4};
  // client.hmset('field003', qe, function(err, response) {
  //     console.log("err:", err);
  //     console.log("response:", response);
  //     client.hmget('field003', ['a', 'c'], function (err, res) {
  //         console.log(err);
  //         console.log(res);
  //         client.end();
  //     });
  // });
  // let aaa = Object.keys(req.query)[0];
  let aaa = "CREATE TABLE list(" +
        "shop_name varchar(100) ," +
        "shop_avatar varchar(100) ," +
        "consumeption_level varchar(100) ," +
        "shop_address varchar(100) ," +
        "shop_tel varchar(100) ," +
        "description varchar(100) ," +
        "shop_location varchar(100) ," +
        "label varchar(100) ," +
        "address_link varchar(100)," +
        "id int not null AUTO_INCREMENT," +
        "PRIMARY KEY (`Id`)" +
        ")";
  // res.header("X-Powered-By",' 3.2.1');
	db.query(aaa,function(err,rows){
    if(err){
      res.send({status: 'failed'});
    }else {
      list.forEach((item) => {
        let bbb = "INSERT INTO list" +
        "(shop_name, shop_avatar, consumeption_level, shop_address, shop_tel, description, shop_location, label, address_link, id)" +
        "value" +
        "('" + item.shop_name + "', '" + item.shop_avatar + "', '" + item.consumeption_level + "', '" + item.shop_address + "', '" + item.shop_tel + "', '" + item.description + "', '" + item.shop_location + "', '" + item.label + "', '" + item.address_link + "', '0');"
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
  // var content = fs.readFileSync('./' + aaa, 'binary');
  // res.writeHead(200, {'Content-Type':'image/png'})
  // res.write(content, 'binary');
  // res.send();

});

export default router