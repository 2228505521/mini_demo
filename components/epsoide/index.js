// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  //不要在属性里面setData，使用内部变量代替
  properties: {
    date: {
      type: String,
      observer: function (newValue, oldVal, changePath) {
        let val = newValue < 10 ? '0' + newValue : newValue;

        this.setData({
          _date: val
        });
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: '',
    _date: '',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  },

  //组件生命周期
  attached:function () {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();

    this.setData({
      year: year,
      month: this.data.months[month],
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
