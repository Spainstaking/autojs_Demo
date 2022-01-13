
var img = images.read("./1.png");  //需要回收

var img = caputerScreen(); // 不需要回收

//  images.load(url);

var img2 = images.copy(img);

// Image.getWidth()
// Image.getHeight()

// Image.pixel(x,y)  ARGB值-颜色  x,y 横纵坐标
// images.pixel(img,x,y)  ARGB值-颜色


//  images.saveTo('/sdcard/脚本/auto.png')
//  images.save(img,'地址',"jpg",50)

var img = images.fromBase64(base64);  //读取base64格式的文件
var base64 = images.toBase64(img);  //编码成base64文件

var res = http.get("https://baidu.jpg");
var b = res.body.bytes();
var img = images.fromBytes(b);   //读取bytes格式的文件
images.toBytes(b);

img.recycle();  //回收图片

//获取屏幕小图
if(!requestScreenCapture)
{
    toast("请求截图失败");
    exit();
}
var screen =  imgaes.caputerScreen()
//  imgaes.caputerScreen()  与  caputerScreen() 等价
//  imgaes.caputerScreen(path) 有path就不返回image对象了
//  caputerScreen()返回的图片不需要回收
var img = images.clip(screen,x,y,w,h)
var img = images.clip(screen,64,195,383-64,358-195)
//封装成函数
function getImg(x1,y1,x2,y2,path){

    var screen =  images.caputerScreen()
    var img = images.clip(screen,x1,y1,x2-x1,y2-y1)
    img.saveTo(path);
    img.recycle();   //调用完函数就会自动释放，不需要这个吧
}


images.resize(img,[200,300]);   //调整图片大小
images.scale(img,0.5,0.5);   //放缩图片

findColor(img,'颜色')  //返回类型Point,表示一个点（坐标）Point.x .y
//循环找色
while(true){
    var img = captureScreen();
    var point = findcolor(img,"#ff0000",{threshold:0});  //完全等于红色
    if(point){
        toast("找到红色，坐标为("+point.x+", "+point.y+")");
    }
    sleep(1500);
    log("正在寻找");
}


//区域找色  简便方法
//images.findColorInRegion(img,color,x,y[,width,height,threshold])  //可作为全局函数，于是有下
//findColorInRegion(img,color,x,y[,width,height,threshold])
// findColorEquals(img,color,x,y[,width,height])
 

//多点找色
images.findMultiColors(img,"#12456",[[宽,高,颜色],[]],{
    region:[,],
    threshold:0
})

//图片中某个位置是否   是特定颜色
// images.detectsColor(image,color,x,y[,threshold=16,algorithm="diff"])
 