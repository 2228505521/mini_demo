
import {Http} from "../utils/http-p.js";

class BookModel extends Http {
    getHotList() {
        return this.request('/book/hot_list');
    }

    getMyBookCount() {
        return this.request('/book/favor/count');
    }

    getDetail(bid) {
        return this.request('/book/'+ bid +'/detail');
    }

    getLikeStatus(bid) {
        return this.request('/book/'+ bid +'/favor');
    }

    getComments(bid) {
        return this.request('/book/'+ bid +'/short_comment');
    }
};

export {BookModel}