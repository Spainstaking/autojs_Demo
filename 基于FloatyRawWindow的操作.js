//创建悬浮窗，返回一个FloatyRawWindow对象
var w = floaty.rawWindow(
    <frame gravity="center" bg="#44ffcc00"></frame>
);

w.setSize(-1,-1);  //占满全屏

//独有，FloatyRawWindow界面是否可触
w.setTouchable(false);


// 获取左上角的坐标
w.getX();  //0
w.getY();  //0 

setTimeout(()=>{
    w.close();
},7000);

