/**
 * Created by King on 2016/12/20.
 */
document.write("<script language='javascript' src='plugins/layer/layer.min.js'></script>");
// layer 弹出层
var ms={
     //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
    //信息提示框 conntent:提示的内容 icon：图标（0-6)time:显示的时间 fn:成功的回掉
    msg:function (content,icon,time,fn) {
        layer.msg(content, {
            icon: icon||1,
            time: time||1000
        },fn)
    },
    //iframe层 title:标题 html:需要加载的html width/height:显示区域的宽高 min:窗口缩小的回掉 restore还原的回掉
    open:function (title, html,width, height,pop) {
        null != title && "" != title || (title = !1),
        null != width && "" != width || (width = 800),
        null != height && "" != height || (height= $(window).height() - 300),
            full= layer.open({
                type: 2,
                area: [width + "px", height + "px"],
                fix: !1,
                maxmin: !0,
                shade:.4,
                title:[title,'color:#23B7E5'],
                content: html,
                min:function(e){
                  $(".layui-layer-shade").css("display","none");
                },
                restore:function () {
                    $(".layui-layer-shade").css("display","block");
                }
            });

        pop&&layer.full(full);
    },
    //弹出警告框 content:警告的内容 icon:图标（0-6）time:显示的时间 kind:动画的类型（0-6）fn:成功的回调
    alert:function (content,icon,time,kind,fn) {
        layer.alert(content, {
            title:'警告',
            icon: icon||0,
            //shade: !1
            anim:kind
        },fn)
    },
    //弹出确认框 title:标题（例如警告）content:内容，icon:(0-6),btn_suc/btn_err(自定义的按钮 如确定/取消) succ/error:点击相应按钮的回调
    confirm:function(title,content,icon,btn_suc,btn_err,succ,error){
        layer.confirm(content,{
            icon: icon||3,
            title: title,
            shade: !1,
            btn:[btn_suc,btn_err]
        },succ,error)
    },
    //loading层 icon:图标（0-2）time:loading时间(2秒直接time=2) index是创建每一个loading的编号标识
    loading:function(icon,time){
        var index = layer.load(icon, {time: time*1000||1000});
        return index;
    },
    closeLoading:function(index){
           layer.close(index);
    },
    //浮动提示层 content：浮动框的内容 dom：对应你要操作的元素（"$(xx)"）dir:浮动框显示的方向 color:背景颜色 time:显示时间
    tip:function(content,dom,dir,color,time){
        layer.tips(content, dom, {
            tips: [dir,color],
            time:time
        });
    },
    //加载层 icon:图标（0-2）opa:不透明度 color:遮罩颜色
    load:function (icon,opa,color) {
        var index = layer.load(icon, {
            shade: [opa,color] //0.1透明度的白色背景
        });
    },
    //选项卡层 width/height：展示区域的宽高 tab1/tab2/tab3：选项卡标题  content1/content2/content3:选项卡内容
    tab:function (width,height,tab1,content1,tab2,content2,tab3,content3) {
        layer.tab({
            area: [width, height],
            tab: [{
                title: tab1,
                content: content1
            }, {
                title: tab2,
                content: content2
            }, {
                title: tab3,
                content: content3
            }]
        });
    },
    //图片查看器
    picLook:function (data,dom,type) {
        layer.photos({
            photos: json/选择器,
            anim:type,
            tab: function(pic, layero){
                console.log(pic) //当前图片的一些信息
            }
        });
    }
    /*示例异步请求获得的json数据 遵守以下格式
       {
         "title": "", //相册标题
         "id": 123, //相册id
         "start": 0, //初始显示的图片序号，默认0
         "data": [   //相册包含的图片，数组格式
                     {
                     "alt": "图片名",
                     "pid": 666, //图片id
                     "src": "", //原图地址
                     "thumb": "" //缩略图地址
                     }
            ]
     }
     <div id="layer-photos-demo" class="layer-photos-demo">
         <img layer-pid="图片id，可以不写" layer-src="大图地址" src="缩略图" alt="图片名">
         <img layer-pid="图片id，可以不写" layer-src="大图地址" src="缩略图" alt="图片名">
     </div>
     */
};
