// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: {
      type: Boolean,
      value: false
    },
    letest: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc: '../images/上一个@2x.png',
    leftNoSrc: '',
    rightSrc: '../images/下一个@2x.png',
    rightNoSrc: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function () {
      if (!this.properties.first) {
        this.triggerEvent('left', {}, {});
      }
    },

    onRight: function () {
      if (!this.properties.letest) {
        this.triggerEvent('right', {}, {});
      }
    }
  }
})
