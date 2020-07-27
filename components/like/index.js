// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value: false,
      observer: function () {

      }
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: '../images/喜欢icon@2x.png',
    noSrc: '../images/不喜欢@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (event) {
      let like = this.properties.like;
      let count = this.properties.count;

      count = like ? count - 1 : count + 1;
      like = !like;
      this.setData({
        count: count,
        like: like
      });

      //激活自定义事件，供外部使用
      this.triggerEvent('like', {
        behavier: like
      }, {});
    }
  }
});







