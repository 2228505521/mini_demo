class KeywordModel {

    key = 'q';

    maxLength = 10;

    getHistory() {
        let words = wx.getStorageSync(this.key);
        if (!words) {
            return []
        }
        return wx.getStorageSync(this.key);
    }

    getHot() {

    }

    addToHistory(keyword) {
        let keywords = this.getHistory();
        let has = keywords.includes(keyword);
        if (!has) {

            if (keywords.length >= this.maxLength) {
                keywords.pop();
            }

            keywords.unshift(keyword);
            wx.setStorageSync(this.key, keywords);
        }
    }
}