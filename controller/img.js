var db = require('../config/mysqlDB.js');
import fs from 'fs';
// import status from '../models/status.js';
// import shopList from '../models/shopList.js';
// import formidable from 'formidable';

class Img {
	constructor () {

  }
  shopAvatar (req, res) {
    let aaa = Object.keys(req.query)[0];
	  var content = fs.readFileSync('./' + aaa, 'binary');
	  res.writeHead(200, {'Content-Type':'image/png'})
	  res.write(content, 'binary');
	  res.send();
  }
}

export default new Img()