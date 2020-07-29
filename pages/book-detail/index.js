// pages/book-detail/index.js

import {BookModel} from "../../models/book";

const bookModel = new BookModel();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        posting: false,
        comments: [],
        detail: Object,
        likeStatus: false,
        likeCount: 0,
        tags: [
            {
                text: '不错',
                num: 110
            },
            {
                text: '技术好',
                num: 11
            },
            {
                text: '人品好',
                num: 123
            },
            {
                text: '不错',
                num: 110
            },
            {
                text: '不错',
                num: 110
            },
            {
                text: '阿双方均安两地分居案例上课的放假了了',
                num: 110
            },
        ],
        summary: '上岛咖啡就爱浪费捡垃圾拉拉得积分拉克的解放路阿家砥砺奋进阿拉时代峰峻拉斯科得积分徕卡加速乐打飞机案例是打飞机拉世纪东方拉丝机离开的房间阿拉斯加朵法拉可使肌肤狄拉克世纪东方拉丝机的弗兰克。\\n阿道夫见啦世纪东方拉丝机快递费就阿里山的咖啡机拉束带结发拉丝机大发链接啊是砥砺奋进阿拉山口复读机啊拉时代峰峻拉水电费卡机上了对方，阿萨德咖啡机按时间段分啦记录，阿萨德发酵饲料打飞机啊拉风是。\\n阿道夫卡司法局了安静的立法，按时发动机ask地方记录阿斯顿发简历，阿飞爱上了打飞机拉手孔捡垃圾是两地分居拉水电费。上岛咖啡就爱浪费捡垃圾拉拉得积分拉克的解放路阿家砥砺奋进阿拉时代峰峻拉斯科得积分徕卡加速乐打飞机案例是打飞机拉世纪东方拉丝机离开的房间阿拉斯加朵法拉可使肌肤狄拉克世纪东方拉丝机的弗兰克。\\n阿道夫见啦世纪东方拉丝机快递费就阿里山的咖啡机拉束带结发拉丝机大发链接啊是砥砺奋进阿拉山口复读机啊拉时代峰峻拉水电费卡机上了对方，阿萨德咖啡机按时间段分啦记录，阿萨德发酵饲料打飞机啊拉风是。\\n阿道夫卡司法局了安静的立法，按时发动机ask地方记录阿斯顿发简历，阿飞爱上了打飞机拉手孔捡垃圾是两地分居拉水电费。上岛咖啡就爱浪费捡垃圾拉拉得积分拉克的解放路阿家砥砺奋进阿拉时代峰峻拉斯科得积分徕卡加速乐打飞机案例是打飞机拉世纪东方拉丝机离开的房间阿拉斯加朵法拉可使肌肤狄拉克世纪东方拉丝机的弗兰克。\\n阿道夫见啦世纪东方拉丝机快递费就阿里山的咖啡机拉束带结发拉丝机大发链接啊是砥砺奋进阿拉山口复读机啊拉时代峰峻拉水电费卡机上了对方，阿萨德咖啡机按时间段分啦记录，阿萨德发酵饲料打飞机啊拉风是。\\n阿道夫卡司法局了安静的立法，按时发动机ask地方记录阿斯顿发简历，阿飞爱上了打飞机拉手孔捡垃圾是两地分居拉水电费。上岛咖啡就爱浪费捡垃圾拉拉得积分拉克的解放路阿家砥砺奋进阿拉时代峰峻拉斯科得积分徕卡加速乐打飞机案例是打飞机拉世纪东方拉丝机离开的房间阿拉斯加朵法拉可使肌肤狄拉克世纪东方拉丝机的弗兰克。\\n阿道夫见啦世纪东方拉丝机快递费就阿里山的咖啡机拉束带结发拉丝机大发链接啊是砥砺奋进阿拉山口复读机啊拉时代峰峻拉水电费卡机上了对方，阿萨德咖啡机按时间段分啦记录，阿萨德发酵饲料打飞机啊拉风是。\\n阿道夫卡司法局了安静的立法，按时发动机ask地方记录阿斯顿发简历，阿飞爱上了打飞机拉手孔捡垃圾是两地分居拉水电费。上岛咖啡就爱浪费捡垃圾拉拉得积分拉克的解放路阿家砥砺奋进阿拉时代峰峻拉斯科得积分徕卡加速乐打飞机案例是打飞机拉世纪东方拉丝机离开的房间阿拉斯加朵法拉可使肌肤狄拉克世纪东方拉丝机的弗兰克。\\n阿道夫见啦世纪东方拉丝机快递费就阿里山的咖啡机拉束带结发拉丝机大发链接啊是砥砺奋进阿拉山口复读机啊拉时代峰峻拉水电费卡机上了对方，阿萨德咖啡机按时间段分啦记录，阿萨德发酵饲料打飞机啊拉风是。\\n阿道夫卡司法局了安静的立法，按时发动机ask地方记录阿斯顿发简历，阿飞爱上了打飞机拉手孔捡垃圾是两地分居拉水电费。'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        wx.showLoading({
            title: '加载中..'
        });
        console.log(options);
        let bid = options.bid;

        let detail = bookModel.getDetail(1);
        let likeStatus = bookModel.getLikeStatus(bid);

        /*
        bookModel.getDetail(1).then(res=>{
            this.setData({
                comments: res
            });
        });

        bookModel.getLikeStatus(bid).then(res=>{
            console.log(res);
            this.setData({
                likeStatus: res.like_status,
                likeCount: res.fav_nums
            });
        });
        */

        //Promise.all并行发起网络请求，统一返回后，再进入最终回调
        //Promise.race 任何一个子promise优先请求成功后，就会直接返回
        //最终res返回的是数组中每个返回值的res
        Promise.all([detail, likeStatus]).then(res=> {
            this.setData({
                book: res[0],
                likeStatus: res[1]
            });
            wx.hideLoading();
        });
    },

    onClickFake: function(event) {
        this.setData({
            posting: true
        });
    },

    onClickCancelPost: function(event) {
        this.setData({
            posting: false
        });
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