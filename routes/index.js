import test from './test';
import account from './account';
import list from './list';

export default app => {
	app.use('/proxy-api/test', test);
  app.use('/proxy-api/account', account);
  app.use('/proxy-api/list', list);
}