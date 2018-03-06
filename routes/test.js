import express from 'express'
const router = express.Router();
var db = require('../config/mysqlDB.js');

router.get('/test', function(req, res, next) {
	db.query("select * from user",function(err,rows){
    if(err){
      res.send([]);
    }else {
      res.send(rows);
    }
    console.log(rows);
  });
});

export default router