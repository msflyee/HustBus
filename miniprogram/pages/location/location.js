// pages/location/location.js
const app = getApp();
const db = wx.cloud.database({env:'hb-jndbr'});

Page({

  /**
   * 页面的初始数据
   */
  data:{
    flag:false,
    latitude:"",
    longitude:"",
    markers:[],
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
  /* 根据用户权限来选择是否显示位置上传按钮 */
 userRec:function()
  {
    var that = this;
    db.collection("drivers_openid").where({
      _openid:app.globalData.openid
    }).get({
      success:function(res){
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
    var markers = [];
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

  }
})