import test from './test';
import account from './account';
import shopList from './shopList';
import img from './img';

export default app => {
	app.use('/proxy-api/test', test);
  app.use('/proxy-api/account', account);
  app.use('/proxy-api/shop-list', shopList);
  app.use('/proxy-api/img', img);
}