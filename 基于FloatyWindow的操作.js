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

setInterval(()=>{}, 1000);