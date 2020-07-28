Page({
  data:{
    marks:[

    ],
    marks_lib:[
      {
      longitude:"114.412447" ,
      latitude:"30.512278",
      title:"图书馆" ,
      iconPath:"../../images/图书馆.png",
      width:30,
      height:30
      },
      {
        longitude:"114.432591" ,
        latitude:"30.510512",
        title:"东校区图书馆" ,
        iconPath:"../../images/图书馆.png",
        width:30,
        height:30
      }
    ],//图书馆标记地
    marks_supermarket:[
      {
      longitude:"114.432110" ,
      latitude:"30.514391",
      title:"学生服务中心NO.2" ,
      iconPath:"../../images/超市.png",
      width:30,
      height:30
      },
      {
        longitude:"114.434431" ,
        latitude:"30.515053",
        title:"学生服务中心NO.6" ,
        iconPath:"../../images/超市.png",
        width:30,
        height:30
      },
      {
        longitude:"114.419731" ,
        latitude:"30.510832",
        title:"东区学生服务中心" ,
        iconPath:"../../images/超市.png",
        width:30,
        height:30
      },
      {
        longitude:"114.432141" ,
        latitude:"30.511453",
        title:"韵苑1栋的学生服务中心" ,
        iconPath:"../../images/超市.png",
        width:30,
        height:30
      },
      {
        longitude:"114.415441" ,
        latitude:"30.516021",
        title:"喻园餐厅附近的教工服务中心" ,
        iconPath:"../../images/超市.png",
        width:30,
        height:30
      },
      {
        longitude:"114.421431" ,
        latitude:"30.515542",
        title:"绝望坡上的教工服务中心" ,
        iconPath:"../../images/超市.png",
        width:30,
        height:30
      },
      {
        longitude:"114.408461" ,
        latitude:" 30.516392",
        title:"教工服务中心NO.4 " ,
        iconPath:"../../images/超市.png",
        width:30,
        height:30
      }
      
    ],//超市标记地
    marks_class:[
      {
        longitude:"114.427328" ,
      latitude:"30.514727",
      title:"东九" ,
      iconPath:"../../images/教室.png",
      width:30,
      height:30
      }
    ],//教学楼标记地
    marks_playground:[
      {
      longitude:"114.431303" ,
      latitude:"30.512971",
      title:"东操" ,
      iconPath:"../../images/运动.png",
      width:30,
      height:30
      },
      {
        longitude:"114.419544" ,
        latitude:"30.509537",
        title:"中操" ,
        iconPath:"../../images/运动.png",
        width:30,
        height:30
      },
      {
        longitude:"114.406509" ,
        latitude:"30.512587",
        title:"西操" ,
        iconPath:"../../images/运动.png",
        width:30,
        height:30
      }
    ],//操场标记地
  },

  logo_lib:function(){
    var that=this
    var marks=that.data.marks
    var lib=that.data.marks_lib
   that.setData({
      marks:lib

    })
    
  },
  logo_class:function(){
    var that=this
    var marks=that.data.marks
    var classroom=that.data.marks_class
   that.setData({
      marks:classroom

    })
   
    
  },
  logo_playground:function(){
    var that=this
    var marks=that.data.marks
    var lib=that.data.marks_playground
   that.setData({
      marks:lib

    })
    
  },
  logo_supermarket:function(){
    var that=this
    var marks=that.data.marks
    var lib=that.data.marks_supermarket
   that.setData({
      marks:lib

    })
    
  }

})