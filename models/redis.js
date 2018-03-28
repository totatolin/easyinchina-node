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
  hmset (a, b) {
    let aaa = {}
    aaa[a] = b
    client.hmset('redisData', aaa, function(err) {
      console.log(err)
    })
  }
  // 读取redis对象
  hgetall () {
    client.hgetall('redisData', function(err, object) {
      console.log(object)
    })
  }
}

class RedisData extends Redis {
  constructor () {
    super();
  }
  hmset () {
    super.hmset('vvv', 'ccc')
    super.hgetall()
  }
}

export default new RedisData()