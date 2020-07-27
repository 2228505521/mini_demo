// components/classic/music/index.js
import {classicBeh} from "../classic_beh";

Component({
    behaviors: [classicBeh],

    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        pauseSrc: '../images/暂停中.png',
        playSrc: '../images/播放中.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {}
})
