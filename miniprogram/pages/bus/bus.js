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
    
    routes:[
    [[],//0 韵苑韵苑
    [{
   
      points: [{
        longitude:"114.432269" ,
        latitude:"30.514173"
        },
         {
          longitude:"114.427017" ,
          latitude:"30.514787"
        }
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],[//1  韵苑东九
      {
   
        points: [{
          longitude:"114.432269" ,
          latitude:"30.514173"
          },
           {
            longitude:"114.427017" ,
            latitude:"30.514787"
          },
          {
            latitude:"30.515365",
            longitude:"114.421148"
          }
        ],
        color: "#33c9FFDD",
        width: 4,
    
      }//2韵苑喻园
    ],
    [{
   
      points: [{
        longitude:"114.432269" ,
        latitude:"30.514173"
        },
         {
          longitude:"114.427017" ,
          latitude:"30.514787"
        },
        {
          latitude:"30.515365",
          longitude:"114.421148"
        },
        {
          latitude:30.515859,
          longitude:114.416047
        }
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],//3韵苑集贸
    []],//数组0
    [[{
   
      points: [{
        longitude:"114.432269" ,
        latitude:"30.514173"
        },
         {
          longitude:"114.427017" ,
          latitude:"30.514787"
        },
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],//0
    [],//1
    [{
   
      points: [
         {
          longitude:"114.427017" ,
          latitude:"30.514787"
        },
        {
          latitude:"30.515365",
          longitude:"114.421148"
        }
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],//2
    [{
   
      points: [
         {
          longitude:"114.427017" ,
          latitude:"30.514787"
        },
        {
          latitude:"30.515365",
          longitude:"114.421148"
        },
        {
          latitude:30.515859,
          longitude:114.416047
        }
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],//3
    []//4
  ],//数组1
  [[
      {
   
        points: [{
          longitude:"114.432269" ,
          latitude:"30.514173"
          },
           {
            longitude:"114.427017" ,
            latitude:"30.514787"
          },
          {
            latitude:"30.515365",
            longitude:"114.421148"
          }
        ],
        color: "#33c9FFDD",
        width: 4,
    
      }
    ],//0
    [{
   
      points: [
         {
          longitude:"114.427017" ,
          latitude:"30.514787"
        },
        {
          latitude:"30.515365",
          longitude:"114.421148"
        }
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],//1
    [],//2
    [{
   
      points: [
         
        {
          latitude:"30.515365",
          longitude:"114.421148"
        },
        {
          latitude:30.515859,
          longitude:114.416047
        }
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],//3
    []//4
  ],//数组2
  [[{
   
      points: [{
        longitude:"114.432269" ,
        latitude:"30.514173"
        },
         {
          longitude:"114.427017" ,
          latitude:"30.514787"
        },
        {
          latitude:"30.515365",
          longitude:"114.421148"
        },
        {
          latitude:30.515859,
          longitude:114.416047
        }
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],//0
    [{
   
      points: [
         {
          longitude:"114.427017" ,
          latitude:"30.514787"
        },
        {
          latitude:"30.515365",
          longitude:"114.421148"
        },
        {
          latitude:30.515859,
          longitude:114.416047
        }
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],//1
    [{
   
      points: [
         
        {
          latitude:"30.515365",
          longitude:"114.421148"
        },
        {
          latitude:30.515859,
          longitude:114.416047
        }
      ],
      color: "#33c9FFDD",
      width: 4,
  
    }],//2
    [],//3
    []//4
  ],//数组3
    [],//数组4
    []//数组5
  ],
    flag:false,
    latitude:"",
    longitude:"",
    markers:[{
    longitude:"" ,
    latitude:"",
    iconPath:"../../images/教室.png",
    width:30,
    height:30},
      {
    longitude:"" ,
    latitude:"",
    iconPath:"../../images/教室.png",
    width:30,
    height:30
      } ],
   
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
},
//确定是哪条路线，来将该路线的地图标点显示在地图上
  confirmRoute:function()
  {

    var s1=this.data.s1
    var s2=this.data.s2
    var qq=this.data.routes[s1][s2]

    this.setData({
      polyline_onshow:qq
     
    })
    console.log("qqq",qq)
  },
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