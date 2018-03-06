var mysql = require("mysql");
var pool = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"oa"
});
pool.connect();
function query(sql,callback){
    pool.getConnection(function(err,connection){
        console.log(err)
        console.log(connection)
        if (err) {

        } else {
            connection.query(sql, function (err,rows) {
                callback(err,rows);
                connection.release();
            });
        }
    });
}

exports.query = query;