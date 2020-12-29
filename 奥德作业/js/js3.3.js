// 定义现在的时间
var time = document.getElementById('time');
// 定义将来的时间
var nextDate = new Date('2020/12/30 00:00:00');
// 声明变量 
var currentDate, currentTime, nextTime, allTime;
// 开启定时器
setInterval (function () {
  // 获取当前的时间
  currentDate = new Date();
  // 获取毫秒数
  currentTime = currentDate.getTime();
  nextTime = nextDate.getTime();
  //  获取剩余的毫秒数
  allTime = nextTime - currentTime;
  // 转化
  var allSecond = parseInt (allTime / 1000);  // 取整
  var day = size(parseInt (allSecond / 3600 / 24));  // 天
  var hour = size(parseInt (allSecond / 3600 % 24));  // 时 
  var minute = size(parseInt (allSecond / 60 % 60));  // 分
  var miao = size(parseInt (allSecond % 60));  // 秒

  // 注入
  time.innerText = '距离元旦放假还剩：' + '\n' + day +'天' + hour +'时' + minute + '分' + miao + '秒'; 
}, 1000)

function size (num) {
  return num < 10 ? '0' + num : num;
}