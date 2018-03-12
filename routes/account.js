import express from 'express'
const router = express.Router();
import Account from '../controller/account';
// import formidable from 'formidable';

router.post('/login', Account.login);

// router.post('/login', function(req, res, next) {
//   const form = new formidable.IncomingForm();
//   form.parse(req, (err, fields) => {
//     console.log(fields)
//   })
// 	db.query('SELECT * FROM user WHERE name = "linsen" AND age = 28',function(err,rows){
//     if(err){
//       res.send({
//         status: 'failed'
//       });
//     }else {
//       if (rows.length === 0) {
//         res.send({
//           status: 'failed'
//         });
//       } else {
//         res.send({
//         status: 'success'
//       });
//       }
//     }
//   });
// });

export default router