//index.js
//获取应用实例
const app = getApp()

// 导入api接口
import api from "../../api/api.js";

Page({

  data: {
    bannerList: [],
    articleList: [],
    isLoadMore: false,
    page: 1,
    pageCount: 0
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
    this.getArticle(this.data.page)
  },

  // 获取文章列表
  getArticle(page) {
    console.log("我已经运行了")
    api.IGetArticle(page - 1)
      .then(res => {
        for (let item of res.data.datas) {
          console.log(item)
          item.headText = item.author.substring(0, 1)
          
        }

        wx.stopPullDownRefresh()
        this.setData({
          articleList: this.data.articleList.concat(res.data.datas),
          page : page,
          isLoadMore : false,
          pageCount : res.data.pageCount
        })

      })
      .catch(e =>{

      })
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    this.onShow()
  }

})