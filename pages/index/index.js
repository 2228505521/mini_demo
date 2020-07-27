//index.js
//获取应用实例

import {ClassicModel} from "../../models/classic.js"
import {LikeModel} from "../../models/like";

const app = getApp();
const classModel = new ClassicModel();
const likeModel = new LikeModel();
Page({
    data: {
        classicData: null,
        first: false,
        letest: true
    },
    onLoad: function () {
        classModel.getLeatest((res)=>{
            this.setData({
                classicData: {
                    count: 100,
                    content: "人生不能像做菜",
                    fav_nums: 100,
                    id: 1,
                    image: "../../images/背景@2x.png",
                    index: 7,
                    like_status: 0,
                    title: "李安",
                    type: 100
                }
            });
        });
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    },

    //组件内部方法，在wxml里面进行绑定
    onLike: function (event) {
        console.log(event);
        let behavier = event.detail.behavier;
        likeModel.postLike(behavier, this.data.classicData.id, this.data.classicData.type);
    },

    //向左翻页
    onLeft: function (event) {

    },

    //向右翻页
    onRight: function (event) {

    },

    _getKey: function () {

    }
});
