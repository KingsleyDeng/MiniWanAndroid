//index.js
//获取应用实例
const app = getApp()

// 导入api接口
import api from "../../api/api.js";

Page({
  data: {
    bannerList: []

  },
  onLoad() {
    api.IGetBanner()
      .then(res => {
        this.setData({
          bannerList: res.data
        })
      })
      .catch(e => {

      })
    this.setData({
      page: 1,
      articleList: [],
    })
    
  }

})