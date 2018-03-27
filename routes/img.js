import express from 'express'
const router = express.Router();
import Img from '../controller/img';

router.get('/shop-avatar', Img.shopAvatar);

export default router