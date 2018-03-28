var db = require('../config/mysqlDB.js');
import status from '../models/status.js';
// import shopList from '../models/shopList.js';
import formidable from 'formidable';
import RedisData from '../models/redis.js';

class ShopList {
	constructor () {

  }
  list (req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
      // status.success.payload = shopList;
      // res.send(status.success);
      let sql = 'SELECT * FROM list;';
      var callback = function (result) {
        if (result) {
          status.success.payload = result
          res.send(status.success);
        } else {
          db.query(sql,function(err,rows){
            if (err) {
              res.send(status.failed);
            } else {
              status.success.payload = rows;
              RedisData.setShopList(sql, rows.toString());
              res.send(status.success);
            }
          });
        }
      }
      RedisData.getShopList(sql, callback);
    })
  }
}

export default new ShopList()