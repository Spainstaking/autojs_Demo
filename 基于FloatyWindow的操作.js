//创建悬浮窗，返回一个FloatyWindow对象
var w = floaty.window(
    <vertical gravity="center">
        <text id="a">悬浮文字</text>
        <button>按钮</button>
    </vertical>
);


// //不推荐
// w.a.setText('文本');
// //推荐
// ui.run(function(){
//     w.a.setText('文本');
// })

// 启用悬浮窗调整（大小、位置）
w.setAdjustEnabled(true);
// 定位
w.setPosition(100,100);
// 获取左上角的坐标
w.getX();
w.getY();
//设置悬浮窗大小
w.setSize(300,100);
// 获取高度宽度
w.getHeight();
w.getWidth();

// 悬浮窗关闭后脚本自动运行
w.exitOnclose();

setTimeout(()=>{
    w.close();
},2000);


setInterval(()=>{}, 1000);