import express from 'express'
const router = express.Router();
import List from '../controller/list';

router.post('/list', List.list);

export default router