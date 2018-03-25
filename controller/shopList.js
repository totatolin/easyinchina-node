var db = require('../config/mysqlDB.js');
import shopList from '../models/shopList.js';
import formidable from 'formidable';

class ShopList {
	constructor () {

  }
  list (req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
      res.send(shopList);
    })
  }
}

export default new ShopList()