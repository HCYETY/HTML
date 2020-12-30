// 1. 获取标签
var allLis = $('header').getElementsByTagName('li');
var allDom = $('content').getElementsByClassName('dom');
var allDomLis = $('content').getElementsByTagName('li');

// 2. 遍历监听
for (var i = 0; i < allLis.length; i++) {
    // var li = allLis[i];
    allLis[i].index = i;
    allLis[i].onmouseover = function () {
        // 1. 清除同级别的选中样式类
        for (var j = 0; j < allLis.length; j++) {
            allLis[j].className = '';
            allDom[j].style.display = 'none';
        }

        // 2. 监听鼠标进入
        allLis.onmouseover = function () {
        	// 2.2 显示下拉菜单
        	allDomLis.style.display = 'block';
        };

        // 3. 监听鼠标离开
        allLis.onmouseout = function () {
        	// 3.2 隐藏下拉菜单
        	allDomLis.style.display = 'none';
        }

        // 4. 设置当前的li标签选中样式类
        // this.className = 'selected';
        // allDom[this.index].style.display = 'block';
    }
}

function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}