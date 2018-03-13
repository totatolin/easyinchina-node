import express from 'express'
const router = express.Router();
import Account from '../controller/account';

router.post('/login', Account.login);

export default router