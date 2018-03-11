import test from './test';
import account from './account';

export default app => {
	app.use('/proxy-api/test', test);
  app.use('/proxy-api/account', account);
}