import express from 'express'
const router = express.Router();
var db = require('../config/mysqlDB.js');

router.get('/', function(req, res, next) {
	db.query("select * from user",function(err,rows){
        if(err){
            res.render("users",{title:"用户列表",datas:[]});
        }else {
            res.render("users",{title:"用户列表",datas:rows});
        }
        console.log(res);
    });
});

export default router