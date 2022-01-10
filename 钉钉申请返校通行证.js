// 点击可用
// click('钉钉')

//点击不可用时,可以寻找父控件，知道找到可以点击的
desc('钉钉').findOne().click()

sleep(1500)

className('android.widget.RelativeLayout').drawingOrder(3).find().click()
id('com.alibaba.android.rimet:id/rl_arrow').find().click()
text('杭州师范大学').findOne().parent().parent().click()

// var x = text('返校通行证').findOne().bounds().centerX()
// var y = text('返校通行证').findOne().bounds().centerY()
// click(x,y)
// 优化如下
var temp = text('返校通行证').findOne()
click(temp.text())


text('这里').findOne().click()

toast('SureY')


