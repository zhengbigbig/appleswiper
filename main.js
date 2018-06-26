
//初始化
var $buttons = $('#icons > li')
var $images = $('#images')
let timerId;
let n = 0
let times = $buttons.length

//添加鼠标点击事件
addclickEvent()

//自动触碰事件
autoclickEvent()
//自动循环事件
autoInterval()
//监听鼠标进出事件
watchmouseEvent()
//解决BUG
settlerBug()





//下面是函数
function addclickEvent() {
    $buttons.on('click', function () {
        var index = $(this).index();
        var p = index * -920
        $images.css({transform: 'translateX(' + p + 'px )'})
        $('#icons > li>span').removeClass('active')
        $('#icons > li>span').eq(index).addClass('active')
    })
}
function autoInterval() {
    timerId = setInterval(function(){
        n +=1
        autoclickEvent()
    },3000)
}
function autoclickEvent() {
    $buttons.eq(n%times).trigger('click',function(){
        var p = n%times * -920
        $images.css({transform: 'translateX(' + p + 'px )'})
        $('#icons > li>span').removeClass('active')
        $('#icons > li>span').eq(index).addClass('active')
    })
}
function settlerBug() {
    $(document).on('visibilitychange', function(){
        if(document.visibilityState == 'hidden'){
            window.clearInterval(timerId)
        }else{
            autoInterval()
        }
    })
}
function watchmouseEvent() {
    $('main').on('mouseenter',function(){
        window.clearInterval(timerId)
    })
    $('main').on('mouseleave',function(){
        autoInterval()
    })
}
//当用户点击按钮，停止循环



