var db = require('../config/mysqlDB.js');
import formidable from 'formidable';

class Account {
	constructor () {

  }
  login (req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
      console.log(fields)
      const {username, password} = fields;
      console.log(username)
      db.query('SELECT * FROM account WHERE username = "' + username + '" AND password = "' + password + '";',function(err,rows){
        if (err) {
          res.send({
            status: 'failed'
          });
        } else {
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
    })
  }
}

export default new Account()