var db = require('../config/mysqlDB.js');
import status from '../models/status.js';
import {ShopListData} from '../models/redis.js';
import formidable from 'formidable';

class ShopList {
	constructor () {

  }
  list (req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
      let sql = 'SELECT * FROM list;';
      var callback = function (result) {
        if (result) {
          status.success.payload = JSON.parse(result);
          res.send(status.success);
        } else {
          db.query(sql,function(err,rows){
            if (err) {
              res.send(status.failed);
            } else {
              status.success.payload = rows;
              ShopListData.setShopList(sql, JSON.stringify(rows));
              res.send(status.success);
            }
          });
        }
      }
      ShopListData.getShopList(sql, callback);
    })
  }
}

export default new ShopList()