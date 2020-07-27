import {Http} from "../utils/http";

class ClassicModel extends Http {
    getLeatest(sCallback) {
        this.request({
            url: '/classic/latest',
            success: (res) => {
                sCallback(res);
            },
            fail: (err) => {
                sCallback(err);
            }
        });
    }
}

export {ClassicModel}