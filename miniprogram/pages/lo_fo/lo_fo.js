

const db = wx.cloud.database({env:'hb-jndbr'});

Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
    selection:["失物","招领"],
    currentid:1,
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

  initList:function(){
    var that = this
    for(let i = 0;i<=5;i++)
    {
      db.collection('lost').doc(String(i))
      .get({
        success:function(res){
          var lostlist = that.data.lostlist
          lostlist.push(res.data)
          that.setData({
            lostlist:lostlist
          })
          console.log("lostlist:",lostlist)
        }
      })
      db.collection('found').doc(String(i))
      .get({
        success:function(res){
          var foundlist = that.data.foundlist
          foundlist.push(res.data)
          that.setData({
            foundlist:foundlist
          })
        }
      })
    }
    console.log("lostlist:"+that.data.lostlist)
 
    for(var i = 0;i<=1;i++)
    {
      console.log(that.data.lostlist[i])
    }
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

