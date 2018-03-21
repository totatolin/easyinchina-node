var db = require('../config/mysqlDB.js');
import list from '../models/list.js';
import formidable from 'formidable';

class List {
	constructor () {

  }
  list (req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
      res.send(list);
    })
  }
}

export default new List()