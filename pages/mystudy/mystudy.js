// pages/mystudy/mystudy.js
var util = require("../../utils/util.js");
Page({
  data:{
    studied:[],
    downTitle_left:'下载的课程',
    downTitle_right:'>',
    count:3,
    day:1,
    userImgSize:160,
    styStateAnimation:{},
    userImgAnimation:{},
    hidden:"false",
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that =this,
        studiedArr = util.getStudied();
      that.setData({
        studied:studiedArr
      });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  scrooll:function(e){
    var that = this,
        top = e.detail.scrollTop,
        hid = "false",
        ratio = 1 - top/that.data.userImgSize,
        animation = {},   //文字动画
        headAmt = {};     //头像动画    
        
       console.log(e);
       console.log("比率"+ ratio);
      if(top > 150){                   //upper过多(数值仅供参考)
          hid = "true";
          that.setData({
            hidden:hid
          });
       }else{
          //文字缩放动画
          animation = wx.createAnimation({
              transformOrigin: "50% 50%",
              timingFunction: "linear",
              delay: 0
            });
           animation.scale(ratio,ratio).opacity(ratio).step();
           //头像大小位移动画
           headAmt = wx.createAnimation({
              transformOrigin: "50% 50%",
              timingFunction: "linear",
              delay: 0
            });
           headAmt.scale(ratio,ratio).opacity(ratio).translateY(top*2).step();//2是因为为rpx与px的原因 


           //动画执行
            that.setData({
              hidden:hid,
              styStateAnimation:animation.export(),
              userImgAnimation:headAmt.export()
            });
       }
       console.log(that.data);
  }
})