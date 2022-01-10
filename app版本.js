log(app.versionCode)  //版本
log(app.versionName)  //版本名称
log(app.autojs.versionCode)  //autojs的versionCode
log(app.autojs.versionName)  //autojs的versionName

app.launchApp('微信')  //需要在脚本中运行才能打开，也可以用作全局函数使用
launchApp('微信')

launch(packageName)  //通过包名  打开
var packageName = getPackageName('微信')  //得到包名
var appName = getAppName('com.tencent.mm')  //得到app名称 