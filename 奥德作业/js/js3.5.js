// 1. 获取需要的标签
        var e_coder = document.getElementById('e_coder');
        var e_app = document.getElementById('e_app');

        // 2. 监听鼠标进入
        e_coder.onmouseover = function (ev1) {
        	// 2.1 改变背景的图片
        	this.style.background = 'url("../images/e_coder_selected.png") no-repeat';
        	// 2.2 显示二维码
        	e_app.style.display = 'block';
        };

        // 3. 监听鼠标离开
        e_coder.onmouseout = function (ev2) {
        	// 3.1 改变背景的图片
        	this.style.background = 'url("../images/e_coder_normal.png") no-repeat';
        	// 3.2 隐藏二维码
        	e_app.style.display = 'none';
        }