log(app.versionCode)  //版本
log(app.versionName)  //版本名称
log(app.autojs.versionCode)  //autojs的versionCode
log(app.autojs.versionName)  //autojs的versionName

app.launchApp('微信')  //需要在脚本中运行才能打开，也可以用作全局函数使用
launchApp('微信')

launch(packageName)  //通过包名  打开
var packageName = getPackageName('微信')  //得到包名
var appName = getAppName('com.tencent.mm')  //得到app名称 

app.viewFile(path) //打开手机内部的文件 和  安装 /sdcard/0/1.txt
app.editFile(path)
app.uninstall(packageName)


app.openAppSetting('包名')
app.startActivity('settings  or console')  //设置 or 日志
app.openUrl('https://www.qq.com')

//自动发送邮件，但需要登录好的邮箱
app.sendEmail({
    email:["123@qq.com"],  //发送人
    subject:'邮件主题',
    text:'正文',
    attachment:'附件路径'
});w

//创建悬浮窗，返回一个FloatyWindow对象
var w = floaty.window(
    <vertical gravity="center">
        <text id="text">悬浮文字</text>
        <button>按钮</button>
    </vertical>
);

setTimeout(()=>{
    w.close();   //  如果写 floaty.closeAll()  关闭所有悬浮窗
},2000);

//创建原始悬浮窗，返回FloatyRawWindow对象，该悬浮窗不会增加任何额外设施，可自己diy
var w = floaty.rawwindow(
    <vertical gravity="center">
        <text id="text">悬浮文字</text>
    </vertical>
);
w.setPosition(500,500);

//保持悬浮窗不被关闭 
setInterval(()=>{},1000);


//脚本运行的线程不是UI线程
//所有对控件的修改操作需要在UI线程执行，此时需要用ui.run才能对ui进行修改
ui.run(function(){
    w.text.setText('文本');  //w.id进行修改
});