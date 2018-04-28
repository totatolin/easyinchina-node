import express from 'express'
const router = express.Router();
import ShopList from '../controller/shopList';

router.post('/list', ShopList.list);
router.post('/item', ShopList.item);

export default router