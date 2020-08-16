// pages/location/location.js
const app = getApp();
const db = wx.cloud.database({env:'hb-jndbr'});

Page({

  /**
   * 页面的初始数据
   */
  data:{
    s1:"",
    s2:"",

    station:"",


    diaplayvalue1:"请选择",
    diaplayvalue2:"请选择",
    value:[],
    options1:[
      {
        value:"yy1",
        label:"韵苑"
      },
      {
        value:"dj",
        label:"东九教学楼"
      },
      {
        value:"yy2",
        label:"喻园"
      },
      {
        value:"jm&gl",
        label:"集贸&管理学院"
      },
      {
        value:"zs",
        label:"紫崧"
      }, {
        value:"xdm",
        label:"校大门"
      }],
    options2:[
      {
        value:"yy1",
        label:"韵苑"
      },
      {
        value:"dj",
        label:"东九教学楼"
      },
      {
        value:"yy2",
        label:"喻园"
      },
      {
        value:"jm&gl",
        label:"集贸&管理学院"
      },
      {
        value:"zs",
        label:"紫崧"
      }, {
        value:"xdm",
        label:"校大门"
      }],
    index_1: 0,
    index_2: 0,
    stations:[
      "韵苑",
      "东九教学楼",
      "紫崧",
      "喻园",
      "集贸&管理学院",
      "图书馆",
      "校大门"
    ],
    yy1:{
    longitude:"114.432220" ,
    latitude:"30.514126",
    title:"韵苑" ,
    iconPath:"../../images/教室.png",
    width:30,
    height:30
    },
    dj:{
      longitude:"114.427017" ,
      latitude:"30.514787",

    },
    yy2:{
      latitude:"30.515365",
      longitude:"114.421148"
    },
    jmgl:{
      latitude:30.515859,
      longitude:114.416047
    },

    zs:{
      longitude:"114.405645" ,
      latitude:" 30.513503",
      title:"紫淞" ,
      iconPath:"../../images/教室.png",
      width:30,
      height:30
      },
    xdm:{
        longitude:"114.412136" ,
        latitude:"30.509440",
        title:"校大门" ,
        iconPath:"../../images/教室.png",
        width:30,
        height:30
        },
    dh:{
          latitude:"30.514676",
          longitude:"114.4148298"
        },
    tsg:{
          latitude:"30.512102",
          longitude:"114.412533"
        },
    kjl:{
          latitude:" 30.513271",
          longitude:"114.412270"
        },
    yey:{
          latitude:" 30.515268",
          longitude:"114.412914"
        },
    xyy:{
          latitude:"30.516936,",
          longitude:"114.414968"
        },
    jxdl:{
          latitude:"30.512851",
          longitude:"114.417227"
        },
    kong:{
          latitude:"",
          longitude:""
        },
    

    flag:false,
    buttonflag:true,
    wait:"6",
    latitude:"",
    longitude:"",

    markers:[{
    longitude:"" ,
    latitude:"",
    iconPath:"../../images/教室.png",
    width:50,
    height:50},
      {
    longitude:"" ,
    latitude:"",
    iconPath:"../../images/教室.png",
    width:50,
    height:50
      } ,
      {longitude:" " ,
      latitude:"",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},{longitude:" " ,
      latitude:"",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},{longitude:" " ,
      latitude:"",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},{longitude:" " ,
      latitude:"",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},{longitude:" " ,
      latitude:"",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},{longitude:" " ,
      latitude:"",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},{longitude:" " ,
      latitude:"",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},{longitude:" " ,
      latitude:"",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30}
    ],
    station_logo1:[
   {longitude:" 30.509440" ,
    latitude:"114.412136",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//南大门
    {longitude:" 30.512102 " ,
    latitude:"114.412533",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//图书馆
    {longitude:" 30.515859 " ,
    latitude:"114.416047",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//集贸
    {longitude:" 30.514676" ,
    latitude:"114.414829",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//大活
    {longitude:"30.515365" ,
    latitude:"114.421148",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//喻园
    {longitude:"  30.514787 " ,
    latitude:"114.427017",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//东九
    {longitude:"  30.514126 " ,
    latitude:"114.432220 ",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//韵苑
    {}
  ],//韵苑到紫淞站点
    station_logo2:[
      {longitude:" 30.515859 " ,
      latitude:"114.416047",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},//集贸
      {longitude:" 30.514676" ,
      latitude:"114.414829",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},//大活
      {longitude:"30.515365" ,
      latitude:"114.421148",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},//喻园
      {longitude:"  30.514787 " ,
      latitude:"114.427017",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},//东九
      {longitude:"  30.514126 " ,
      latitude:"114.432220 ",
      iconPath:"../../images/公交车站点.png",
      width:30,
      height:30},//韵苑
    {longitude:"30.512851 " ,
    latitude:"114.417227",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//机械楼
    {longitude:"30.513271 " ,
    latitude:"114.412270",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//科技楼
    {longitude:"  30.513503" ,
    latitude:"114.405645",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//紫淞
    ],//韵苑到校大门站点
    station_logo3:[
      {longitude:" 30.509440" ,
    latitude:"114.412136",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//南大门
    {longitude:" 30.512102 " ,
    latitude:"114.412533",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//图书馆
    {longitude:"30.515365" ,
    latitude:"114.421148",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//喻园
    {longitude:"30.516936" ,
    latitude:"114.414968",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//医院
    {longitude:"30.515268" ,
    latitude:"114.412914",
    iconPath:"../../images/公交车站点.png",
    width:30,
    height:30},//幼儿园
    {},{},{}
    ],//喻园到校大门站点
   polyline_onshow:[],
   routes1:[{
   
    points: [{
      longitude:"114.432269" ,
      latitude:"30.514173"
      },//韵苑
       {
        longitude:"114.427017" ,
        latitude:"30.514787"
      },//东九
      {
        latitude:"30.515365",
        longitude:"114.421148"
      },//喻园
      {
        latitude:30.515859,
        longitude:114.416047
      },//集贸
      {
        latitude:30.515952,
        longitude:114.415038
      },//路口
      {
        latitude:30.514676,
        longitude:114.414829
      },//大活
      {
        latitude:30.513068,
        longitude:114.414647
      },//路口
      {
        latitude:30.513244,
        longitude:114.412624
      },//路口
      {
        latitude:30.512278,
        longitude:114.412485
      },//路口
      {
        latitude:30.512102,
        longitude:114.412533
      },//图书馆
      {
        latitude: 30.509440,
        longitude:114.412136
      },//校大门
    ],
    color: "#33c9FFDD",
    width: 4,

  }],//韵苑到校大门
   routes2:[{
   
    points: [{
      longitude:"114.432269" ,
      latitude:"30.514173"
      },//韵苑
       {
        longitude:"114.427017" ,
        latitude:"30.514787"
      },//东九
      {
        latitude:"30.515365",
        longitude:"114.421148"
      },//喻园
      {
        latitude:30.515859,
        longitude:114.416047
      },//集贸
      {
        latitude:30.515952,
        longitude:114.415038
      },//路口
      {
        latitude:30.514676,
        longitude:114.414829
      },//大活
      {
        latitude:30.513068,
        longitude:114.414647
      },//路口
      {
        latitude:30.513271,
        longitude:114.412270
      },//科技楼
      {
        latitude: 30.512851,
        longitude:114.417227
      },//机械楼
      {
        latitude:30.512504,
        longitude:114.421014
      },//路口
      {
        latitude:"30.515365",
        longitude:"114.421148"
      },//喻园
      {
        latitude:30.515859,
        longitude:114.416047
      },//集贸
      {
        latitude:30.515952,
        longitude:114.415038
      },//路口
      {
        latitude:30.514676,
        longitude:114.414829
      },//大活
      {
        latitude:30.513068,
        longitude:114.414647
      },//路口
      {
        latitude:30.513271,
        longitude:114.412270
      },//科技楼
      {
        latitude:30.513761,
        longitude:114.407592
      },//路口
      {
        latitude:30.513503,
        longitude:114.405645
      },//紫淞
    ],
    color: "#33c9FFDD",
    width: 4,

  }],//韵苑到紫淞
   routes3:[{
   
    points: [
      {
        latitude:"30.515365",
        longitude:"114.421148"
      },//喻园
      {
        latitude:30.515744,
        longitude:114.417640
      },//路口
      {
        latitude:30.516687,
        longitude:114.417742
      },//路口
      {
        latitude: 30.516936,
        longitude:114.414968
      },//医院
      {
        latitude:30.517130,
        longitude:114.413048
      },//路口
      {
        latitude:" 30.515268",
        longitude:"114.412914"
      },//幼儿园
      
      {
        latitude:30.513244,
        longitude:114.412624
      },//路口
      {
        latitude:30.512278,
        longitude:114.412485
      },//路口
      {
        latitude:30.512102,
        longitude:114.412533
      },//图书馆
      {
        latitude: 30.509440,
        longitude:114.412136
      },//校大门
    ],
    color: "#33c9FFDD",
    width: 4,

  }],//喻园到校大门


    

    flag:false,
    latitude:"",
    longitude:"",
 
   
    polyline_onshow:[],



    polyline:[{
      points:[{
        //校大门
        latitude:30.50944, 
        longitude:114.411927
      },
      //路口11
{
  latitude:30.511275,
  longitude:114.412399
},
//路口12
{
  latitude:30.510415,
  longitude:114.412286
},
    {
      //图书馆
      latitude:30.512278,
      longitude:114.412447
    },
    
//路口10
{
  latitude:30.513239,
  longitude:114.412614
},
    //路口9
{
  latitude:30.514177,
  longitude:114.412721
},
    //路口8
{
  latitude:30.514126,
  longitude:114.413150
},
    //路口7
{
  latitude:30.514094,
  longitude:114.413869
},
    {
      //大活
      latitude:30.514029,
      longitude:114.414743
    },
    //路口6
{
  latitude:30.515587,
  longitude:114.414952
},
    //喻园餐厅
    {
      latitude:30.515957,
      longitude:114.415038
    },
  {
    //集贸
    latitude:30.515859,
    longitude:114.416047
  },
  //路口5
{
  latitude:30.515846,
  longitude:114.416508
},
  //路口4
{
  latitude:30.515749,
  longitude:114.417629
},
  //路口3
{
  latitude:30.515370,
  longitude:114.421159
},
{
  //喻园
  latitude:30.515365,
  longitude:114.421148
},
//路口2
{
  latitude:30.515120,
  longitude:114.423798
},
{
  //东九
  latitude:30.514727,
  longitude:114.427328
},
//路口1
{
  latitude:30.514381,
  longitude:114.429656
},
{
  //韵苑
  latitude:30.514103,
  longitude:114.432194
}
],
arrowLine:true,
color:"#33c9FFDD",
width:2
    }]



  },

  //将选中的站点显示出来

  //将选中的站点显示在选择框内

setValue:function(values, key) {
  this.setData({
        [`value${key}`]: values.value,
        [`displayValue${key}`]: values.label,
  })
},
//监听在菜单中滑到了哪一个站点
onValueChange:function(e){
  const index = e.currentTarget.dataset
  console.log('onValueChange${index',e.detail.value[0])
  console.log("qwer")
},
//1在弹出的选择菜单中选择站点并确认
  onConfirm1:function(e) {
    const { index } = e.currentTarget.dataset
    this.setValue(e.detail, index)
    console.log(`onConfirm${index}`, e.detail)
    if (e.detail.value[0]=="yy1"){
      var yy1=this.data.yy1
      this.setData({
        'markers[0].longitude':yy1.longitude,
        'markers[0].latitude':yy1.latitude,
        's1':0
      })
    }
    if (e.detail.value[0]=="dj"){
      var dj=this.data.dj
      this.setData({
        'markers[0].longitude':dj.longitude,
        'markers[0].latitude':dj.latitude,
        's1':1
      })
    }
    if (e.detail.value[0]=="yy2"){
      var yy1=this.data.yy2
      this.setData({
        'markers[0].longitude':yy1.longitude,
        'markers[0].latitude':yy1.latitude,
        's1':2
      })
    }
    if (e.detail.value[0]=="jm&gl"){
      var m=this.data.jmgl
      this.setData({
        'markers[0].longitude':m.longitude,
        'markers[0].latitude':m.latitude,
        's1':3
      })
    }

    if (e.detail.value[0]=="zs"){
      var yy1=this.data.zs
      this.setData({
        'markers[0].longitude':yy1.longitude,
        'markers[0].latitude':yy1.latitude,
        's1':4
      })
    }
    if (e.detail.value[0]=="xdm"){
      var yy1=this.data.xdm
      this.setData({
        'markers[0].longitude':yy1.longitude,
        'markers[0].latitude':yy1.latitude,
        's1':5
      })
    }
    

},
 


//2在弹出的选择菜单中选择站点并确认 两个函数相同 区分开来是为了将出发和终点站分别存在缓存里 以便在confirmRoute函数中使用用以确定是哪条路线，来将该路线的地图标点显示在地图上
onConfirm2:function(e) {
  const { index } = e.currentTarget.dataset
  this.setValue(e.detail, index)
  console.log(`onConfirm${index}`, e.detail)
  if (e.detail.value[0]=="yy1"){
    var m=this.data.yy1
    this.setData({
      'markers[1].longitude':m.longitude,
      'markers[1].latitude':m.latitude,
      's2':0
    })
  }
  if (e.detail.value[0]=="dj"){
    var m=this.data.dj
    this.setData({
      'markers[1].longitude':m.longitude,
      'markers[1].latitude':m.latitude,
      's2':1
    })
  }
  if (e.detail.value[0]=="yy2"){
    var m=this.data.yy2
    this.setData({
      'markers[1].longitude':m.longitude,
      'markers[1].latitude':m.latitude,
      's2':2
    })
  }
  if (e.detail.value[0]=="jm&gl"){
    var m=this.data.jmgl
    this.setData({
      'markers[1].longitude':m.longitude,
      'markers[1].latitude':m.latitude,
      's2':3
    })
  }

  if (e.detail.value[0]=="zs"){
    var yy1=this.data.zs
    this.setData({
      'markers[0].longitude':yy1.longitude,
      'markers[0].latitude':yy1.latitude,
      's2':4
    })
  }
  if (e.detail.value[0]=="xdm"){
    var yy1=this.data.xdm
    this.setData({
      'markers[0].longitude':yy1.longitude,
      'markers[0].latitude':yy1.latitude,
      's2':5
    })
  }

},
//确定是哪条路线，来将该路线的地图标点显示在地图上
  confirmRoute:function()
  {

    var s1=this.data.s1
    var s2=this.data.s2
    var routes1=this.data.routes1
    var routes2=this.data.routes2
    var routes3=this.data.routes3
    var q1=this.data.station_logo1
    var markers=this.data.markers
    var polyline_onshow=this.polyline_onshow
    var yy1=this.data.yy1
    var dj=this.data.dj
    var yy2=this.data.yy2
    var jmgl=this.data.jmgl
    var dh=this.data.dh
    var tsg=this.data.tsg
    var xdm=this.data.xdm
    var kjl=this.data.kjl
    var zs=this.data.zs
    var yey=this.data.yey
    var xyy=this.data.xyy
    var jxdl=this.data.jxdl
    var kong=this.data.kong
    if ((s1==0&&s2==1)||(s1==0&&s2==2)||(s1==0&&s2==3)||(s1==0&&s2==5)||(s1==1&&s2==2)||(s1==1&&s2==3)
    ||(s1==1&&s2==5)||(s1==2&&s2==3)||(s1==5&&s2==3)||
    (s1==1&&s2==0)||(s1==2&&s2==0)||(s1==3&&s2==0)||(s1==5&&s2==0)||(s1==2&&s2==1)||(s1==3&&s2==1)
    ||(s1==5&&s2==1)||(s1==3&&s2==2)||(s1==3&&s2==5)){
      this.setData({
       polyline_onshow:routes1,
  
       'markers[2].longitude':yy1.longitude,
       'markers[2].latitude':yy1.latitude,
       'markers[3].longitude':dj.longitude,
       'markers[3].latitude':dj.latitude,
       'markers[4].longitude':yy2.longitude,
       'markers[4].latitude':yy2.latitude,
       'markers[5].longitude':jmgl.longitude,
       'markers[5].latitude':jmgl.latitude,
       'markers[6].longitude':dh.longitude,
       'markers[6].latitude':dh.latitude,
       'markers[7].longitude':tsg.longitude,
       'markers[7].latitude':tsg.latitude,
       'markers[8].longitude':xdm.longitude,
       'markers[8].latitude':xdm.latitude,
       'markers[9].longitude':kong.longitude,
       'markers[9].latitude':kong.latitude,
      })//韵苑--小大门

    }//if.1
    if ((s1==4&&s2==0)||(s1==4&&s2==1)||(s1==4&&s2==2)||(s1==4&&s2==3)||
    (s2==4&&s1==0)||(s2==4&&s1==1)||(s2==4&&s1==2)||(s2==4&&s1==3))
  {
      this.setData({
       polyline_onshow:routes2,
  
       'markers[2].longitude':yy1.longitude,
       'markers[2].latitude':yy1.latitude,
       'markers[3].longitude':dj.longitude,
       'markers[3].latitude':dj.latitude,
       'markers[4].longitude':yy2.longitude,
       'markers[4].latitude':yy2.latitude,
       'markers[5].longitude':jmgl.longitude,
       'markers[5].latitude':jmgl.latitude,
       'markers[6].longitude':dh.longitude,
       'markers[6].latitude':dh.latitude,
       'markers[7].longitude':kjl.longitude,
       'markers[7].latitude':kjl.latitude,
       'markers[8].longitude':jxdl.longitude,
       'markers[8].latitude':jxdl.latitude,
       'markers[9].longitude':zs.longitude,
       'markers[9].latitude':zs.latitude,
      })//紫淞韵苑

    }//if.2
    if ((s1==5&&s2==2)){
      this.setData({
       polyline_onshow:routes3,
  
       'markers[2].longitude':xdm.longitude,
       'markers[2].latitude':xdm.latitude,
       'markers[3].longitude':tsg.longitude,
       'markers[3].latitude':tsg.latitude,
       'markers[4].longitude':yey.longitude,
       'markers[4].latitude':yey.latitude,
       'markers[5].longitude':xyy.longitude,
       'markers[5].latitude':xyy.latitude,
       'markers[6].longitude':yy2.longitude,
       'markers[6].latitude':yy2.latitude,
       'markers[7].longitude':kong.longitude,
       'markers[7].latitude':kong.latitude,
       'markers[8].longitude':kong.longitude,
       'markers[8].latitude':kong.latitude,
       'markers[9].longitude':kong.longitude,
       'markers[9].latitude':kong.latitude,
      })//喻园校大门
     

      }//if.3 校大门到喻园
      if((s1==4&&s2==5)||(s1==5&&s2==4)){
        wx.showToast({
          title: '无此路线！',
          icon: 'none',
          duration: 2000
      })
    }//if.4 无此路线
    if((s1==s2)){
      wx.showToast({
        title: '站点重复！',
        icon: 'none',
        duration: 4000
    })
  }//if.5 重复路线
  if((s1==0&&s2==1)||(s1==0&&s2==2)||(s1==0&&s2==3)||(s1==0&&s2==5)){
    this.setData({
      station:"yy1_1"//
    })
  
  }
  if(s1==0&&s2==4){
    this.setData({
      station:"yy1_2"//
    })
  }
  if(s1==1&&s2==0){
    this.setData({
      station:"dj_1"//
    })
  }
  if((s1==1&&s2==2)||(s1==1&&s2==3)||(s1==1&&s2==4)||(s1==1&&s2==5)){
    this.setData({
      station:"dj_2"//
    })
  }
  if((s1==2&&s2==0)||(s1==2&&s2==1)){
    this.setData({
      station:"yy2_1"//
    })
  }
  if((s1==2&&s2==3)||(s1==2&&s2==4)||(s1==2&&s2==5)){
    this.setData({
      station:"yy2_2"//
    })
  }
  if((s1==3&&s2==2)||(s1==3&&s2==1)||(s1==3&&s2==0)){
    this.setData({
      station:"jmgl_1"//
    })
  }
  if((s1==3&&s2==4)||(s1==3&&s2==5)){
    this.setData({
      station:"jmgl_2"//
    })
  }
  if((s1==4&&s2==0)||(s1==4&&s2==1)||(s1==4&&s2==2)||(s1==4&&s2==3)){
    this.setData({
      station:"zs"//
    })
  }
  if((s1==5&&s2==0)||(s1==5&&s2==1)){
    this.setData({
      station:"xdm_1"//
    })
  }
  if((s1==5&&s2==3)||(s1==2&&s2==2)){
    this.setData({
      station:"xdm_2"//
    })
  }
 
  this.update()
  this.shownumber()
  console.log("55555")
  },
  decrease:function(){
    this.update_1()

  },

  update:function(event){
    const db=wx.cloud.database();
    const _ = db.command;
    var that = this;
    var station=that.data.station
    db.collection('number').doc(station).update({
      data:{
        people:_.inc(1),
      },
      success:function(res){
        console.log("re更新成功:",res)
        that.setData({
          buttonflag:false
        })
        console.log(buttonflag)
      },
      fail:function(err){ cosole.log("更新失败",err)}
    })
  },

  update_1:function(event){
    const db=wx.cloud.database();
    const _ = db.command;
    var that = this;
    var station=that.data.station
    db.collection('number').doc(station).update({
      data:{
        people:_.inc(-1),
      },
      success:function(res){
        console.log("re更新成功:",res)
        that.setData({
          buttonflag:true
        })
        console.log(buttonflag)
      },
      fail:function(err){ cosole.log("更新失败",err)}
    })
  },
  
  shownumber:function(){
    var station=this.data.station
    var ewait=this.data.wait
    const db=wx.cloud.database().collection('number').doc(station).get({
      success:res=>{
        console.log("res成功wait",res.data.people)
        this.setData({
          wait:res.data.people,
        })
      },
      fail:res=>{
        console.log("res失败",res)
      },
    })
    console.log("qqqqqr")

  },

  /* 根据用户权限来选择是否显示位置上传按钮 */



  /* 根据用户权限来选择是否显示位置上传按钮 */

 userRec:function()
  {
    var that = this;
    db.collection("drivers_openid").where({
      _openid:app.globalData.openid
    }).get({
      success:function(res){
        console.log(app.globalData.openid)
        that.setData({
          latitude:res.data[0].location.latitude,
          longitude:res.data[0].location.longitude,
        })
        wx.setStorageSync('id',res.data[0]._id ,)
        if(res.data[0]._openid === app.globalData.openid)
        {
          that.setData({
            flag:true
          })
        }
      },
      fail:function(err)
    {
    }
    })
  },
  /* 将实时位置上传到数据库 */
  uploadLoc:function()
  {
    var that = this;
    /* 设定自动上传频率 */
    setInterval(function(){
      /* 获取实时位置 */
      wx.getLocation({
        type:'gcj02',
        success(res){
          let id =  wx.getStorageSync('id')
          console.log('write')
          /* 更新数据库 */
          db.collection('drivers_openid').doc(id).update({
            data:{
              location:db.Geo.Point(res.longitude,res.latitude)
            }
          })
        }
      })
    },5000)
  },

  /* 动态更新坐标点 */

  /* 动态更新校车坐标点 */

  get_marker:function(snapshot){
    var markers = this.data.markers;
    var marker = {};
    for(var i = 0; i< snapshot.docs.length; i++){
      marker = {
        id:i,
        width:40,
        height:40,
        iconPath:"/images/bus.png",
        latitude:snapshot.docs[i].location.coordinates[1],
        longitude:snapshot.docs[i].location.coordinates[0]
      }
      markers.push(marker)
    }
    return markers;
  },

  /* 监听数据库变化并将最新所有坐标点显示在页面上 */

  /* 监听数据库变化并将最新校车坐标点显示在页面上 */

  showLoc:function(){
        var that = this;
        setInterval(function(){
        const watcher = db.collection('drivers_openid')
        .where({ uni_name: "driver"})
        .watch({
          onChange:function(snapshot){
            console.log('read')
            that.setData({
              markers:that.get_marker(snapshot)
          })
          },
          onError:function(err){
            console.log('the watch closed because of the err',err)
          }
          })
        },3000)
      },
  /*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'add',
      success: function(res) {
        console.log('更新成功')
      },
      fail: console.error
    })
    var that = this;
    this.userRec();
    this.showLoc();
  },

  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /*
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.showLoc();
  },

  /*
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /*
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /*
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /*
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /*
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
})