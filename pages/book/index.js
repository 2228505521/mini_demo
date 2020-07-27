// pages/book/index.js

import { BookModel } from "../../models/book";

const bookModel = new BookModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [{
      title: '你好',
      author: '作者',
      fav_nums: 12,
      img: '../images/一个人的北京.png'
    },
    {
      title: '你好',
      author: '作者',
      fav_nums: 12,
      img: '../images/一个人的北京.png'
    },
    {
      title: '你好',
      author: '作者',
      fav_nums: 12,
      img: '../images/一个人的北京.png'
    },{
      title: '你好',
      author: '作者',
      fav_nums: 12,
      img: '../images/一个人的北京.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    const promise = new Promise((resolve, reject) => {
      //pending fulfilled rejected
      //进行中  已成功  已失败
      wx.getSystemInfo({
        success: (result) => {
          resolve(result);
        },
        fail: (error) => {
          reject(error);
        }
      })
    });

    promise.then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    */

    //let hotList = bookModel.getHotList();
    /*
    hotList.then((res)=>{
      console.log(res);
      boolModel.getMyBookCount().then((res)=>{
        boolModel.getMyBookCount().then((res)=> {

        });
      });
    });
    */

    /*
    bookModel.getHotList().then(res => {
      console.log(res);
      return bookModel.getMyBookCount();
    }).then(res => {
      console.log(res);
      return bookModel.getMyBookCount();
    }).then(res => {
      console.log(res);
    });
    */
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