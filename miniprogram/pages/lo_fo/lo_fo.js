const db = wx.cloud.database({env:'hb-jndbr'});

Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
    selection:["失物","招领"],
    currentid:0,
    lostlist:[ ],
    foundlist:[ ]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
      currentid:e.currentTarget.dataset.id
    })
  },
//页面初始化时获取数据列表
  initList:function(){
    var that = this
    for(var i = 0;i<=5;i++)  //初始化页面显示条目数量设置为6
    {
      console.log(i)
      db.collection('lost').doc(String(i))
      .get({
        success:function(res){
          //将时间戳格式化显示出来
          var lostlist = that.data.lostlist
          var formatArr = ['Y','M','D']
          var date = res.data.lost_time
          var returnArr = [date.getFullYear(),date.getMonth()+1,date.getDate()]
          var format = "Y年M月D日"
          for(var j = 0;j<3;j++){
            format = format.replace(formatArr[j],returnArr[j])
          }
          res.data.lost_time = format  //注意：想要更改lost_time，只能先更改res.data的lost_time，不能等到将res.data赋值给lostlist之后再修改

          lostlist.push(res.data)
          that.setData({
            lostlist:lostlist
          })
        }
      })
      db.collection('found').doc(String(i))
      .get({
        success:function(res){
          var foundlist = that.data.foundlist

          var formatArr2 = ['Y','M','D']
          var date2 = res.data.founded_time
          var returnArr2 = [date2.getFullYear(),date2.getMonth()+1,date2.getDate()]
          var format2 = "Y年M月D日"
          for(var k = 0;k<3;k++){
            format2 = format2.replace(formatArr2[k],returnArr2[k])
          }
          res.data.founded_time = format2

          foundlist.push(res.data)
          that.setData({
            foundlist:foundlist
          })
        }
      })
    }
    console.log(that.data.lostlist)
  },

  getList:function(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

