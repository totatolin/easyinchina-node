var db = require('../config/mysqlDB.js');
import status from '../models/status.js';
import shopList from '../models/shopList.js';
import formidable from 'formidable';

class ShopList {
	constructor () {

  }
  list (req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
      // status.success.payload = shopList;
      // res.send(status.success);
      db.query('SELECT * FROM list;',function(err,rows){
        if (err) {
          res.send(status.failed);
        } else {
          status.success.payload = rows;
          res.send(status.success);
        }
      });
    })
  }
}

export default new ShopList()