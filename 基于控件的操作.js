

setText("你好")  //设置标签，默认可编辑的所有textbox都会输入,覆盖
setText(0,"你好")
input(0,"你好")  //append

//使用文本选择器
text("文件管理器")
textStartsWith("文件")

//使用描述选择器
desc("文本")

//使用id选择器
id("字符串")

//找到控件(会一直搜索控件，直到找到了为止)
text("微信").findOne()
text("微信").findOne(3000)  //超时了就不寻找  
text("微信").findOnce(3000)  //只查找一次
text("微信").find() //找到所有的控件
text("微信").exists() //是否存在

//向上滑动
text("微信").findOne().ScrollUp()

//寻找子控件,返回子控件的集合
text("微信").findOne().children()
text("微信").findOne().childCount()
text("微信").findOne().child(1)

//寻找父控件，没有返回null
text("微信").findOne().parent()

//获取返回信息,返回rect对象
var X = text("微信").findOne().bounds().centerX()
var Y = text("微信").findOne().bounds().centerY()
click(X,Y)


//控件对象不是true,可以获取其文本返回，再点击
var 控件对象 = id("字符串").find()
click(控件对象.text())

//控件集合的操作方法
//UICollection 方法举例
text("微信").find().size()//找到控件数量
text("微信").find().get(1)//找到控件对象
text("微信").find().forEach
(child=>
    {
        click(child.text())
        sleep(3000)
        back()
        sleep(1500)
    }
);
text("微信").find().empty()//是否为空
text("微信").find().findOne(text("A"))//有的话返回一个控件，无则空  text不区分大小写