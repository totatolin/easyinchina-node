import redis from 'redis';
var client = redis.createClient('6379', '127.0.0.1');
// redis 链接错误
client.on("error", function(error) {
  console.log(error);
});

class Redis {
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
      callback(object[key])
    })
  }
}

class RedisData extends Redis {
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

export default new RedisData()