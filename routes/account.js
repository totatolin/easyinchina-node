import express from 'express'
const router = express.Router();
var db = require('../config/mysqlDB.js');

router.get('/login', function(req, res, next) {
	db.query('SELECT * FROM user WHERE name = "linsen" AND age = 28',function(err,rows){
    if(err){
      res.send({
        status: 'failed'
      });
    }else {
      if (rows.length === 0) {
        res.send({
          status: 'failed'
        });
      } else {
        res.send({
        status: 'success'
      });
      }
    }
  });
});

export default router