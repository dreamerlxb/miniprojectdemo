//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  goPreview: function() {
    wx.navigateTo({
      url: '../swiper/swiper'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
