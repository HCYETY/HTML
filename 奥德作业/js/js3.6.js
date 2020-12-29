window.addEventListener('load', function () {
    // 1. 获取需要的标签
   var allLi = document.getElementsByTagName('li');
   var allImage = document.getElementsByTagName('img');

   // 2. 索引
   var loop = 0;

   // 3. 定时器
   setInterval(function () {
       // 3.1 索引++
       loop += 1;
       loop %= 18;
       // console.log(loop);

       // 3.2 排他
       for (var i = 0; i < allLis.length; i++) {
           allLi[i].className = '';
           allImage[i].style.display = 'none';
       }

       // 3.3 处理自己选中
       allLi[loop].className = 'current';
       allImage[loop].style.display = 'block';
   }, 1000);
});