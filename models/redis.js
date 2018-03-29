import redis from 'redis';
var client = redis.createClient('6379', '127.0.0.1');
// redis 链接错误
client.on("error", function(error) {
  console.log(error);
});

// redis的父类方法
class RedisFn {
  constructor () {

  }
  // 写入redis对象
  hmset (key, val) {  
    let obj = {}
    obj[key] = val
    client.hmset('redisData', obj, function(err) {
      console.log(err)
    })
  }
  // 读取redis对象
  hgetall (key, callback) {
    client.hgetall('redisData', function(err, object) {
      let result = object ? object[key] : null;
      callback(result);
    })
  }
}

// 商家列表
class ShopList extends RedisFn {
  constructor () {
    super();
  }
  setShopList (key, val) {
    super.hmset(key, val);
  }
  getShopList (key, callback) {
    super.hgetall(key, callback);
  }
}

const ShopListData = new ShopList();

export {
  ShopListData
}
