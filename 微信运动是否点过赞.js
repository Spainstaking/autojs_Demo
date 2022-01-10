if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
sleep(1000);
//找到点赞控件
var like =  id("com.tencent.mm:id/c5u").find().get(0).contentDescription[2];
// var like =  id("com.tencent.mm:id/c5u").find().get(1);

//获取该控件中的坐标
// var x = like.bounds().centerX();
// var y = like.bounds().centerY();

log(like)
//截图
// var img = captureScreen();
// var m = images.pixel(img,x,y);
// var m = colors.toString(m);

if(like==0){
    log("没有点过赞");

}
else{
    log("已经点过赞了")
}

// if(images.detectsColor(img, "#ffffff",x,y)){
//     log("没有点过赞");

// }
// else{
//     log("已经点过赞了")

// }
