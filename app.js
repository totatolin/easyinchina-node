// import router from './routes/index.js';
import express from 'express';
var router = express.Router();
var app = express();
// var db = require('./config/mysqlDB.js');

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// router(app);

// function select(sql) {
//     var promise = new Promise(function(resolve,reject) {
//         var result = null;
//         var mysql = require('mysql');
//         var connection = mysql.createConnection({
//           host: 'localhost',
//           user: 'root',
//           password: 'root',
//           database: 'test'
//         });

//         connection.connect();
//         connection.query("USE test");
//         connection.query(sql, function (err, results, fields) { 
//             if (err) { 
//                 console.log("err");
//                 reject(err); 
//             }else {
//                 console.log("yes");
//                 if(results.length > 0) {
//                     resolve({status: 1});
//                 }else {
//                     resolve({status: 0});
//                 }           
//             } 
//           } 
//         );
//         connection.end(); 
//     })

//     return promise; 
// }

app.set('view engine', 'jade');

var mysql = require("mysql");
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"db"
});

app.use('/test', router);
router.get('/add', function (req, res) {
	pool.getConnection(function(err, connection) {
		if (err) {
			console.log(err)
		} else {
			var name = 'linsen'
			var age = 28
			connection.query("insert into user(name,age) values('"+name+"','"+ age +"')",function(err,rows){
		        if(err){
		            console.log(err)
		        }else {
		            console.log('yes')
		        }
		    });
		}
	})
})
router.get('/test', function (req, res) {
	pool.getConnection(function(err, connection) {
		if (err) {
			console.log(err)
		} else {
			connection.query("select * from user",function(err,rows){
		        if(err){
		            res.render("index",{title:"用户列表2",datas:[]});
		        }else {
		            res.render("index",{title:"用户列表1",datas:rows});
		        }
		    });
		}
	})
})
// router.get('/test',function(req,res){
//     // db.query("select * from user",function(err,rows){
//     //     if(err){
//     //         res.render("users",{title:"用户列表",datas:[]});
//     //     }else {
//     //         res.render("users",{title:"用户列表",datas:rows});
//     //     }
//     // });
// 	// res.send('adfdafdsa');
// 	select('select * from user')
// 	.then(function(data) {
// 		console.log(data)
// 		res.render("users",{title:"用户列表",datas:rows});
// 	})
// 	.catch(function(err) {

// 	})
// });

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});