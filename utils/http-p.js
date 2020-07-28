
import { config } from '../config.js';

const tips = {
        1: '服务器错误',
        1005: 'appkey无效',
        3000: '连接不存在',
};

class Http {

        request(url, resolve, reject, data = {}, method = 'GET') {
                return new Promise((resolve, reject)=> {
                        this._request(url, resolve, reject, data, method);
                });
        }

        _request(url, resolve, reject, data = {}, method = 'GET') {
                console.log(url);
                console.log(config.api_base_url + url);
                wx.request({
                        url: config.api_base_url + url,
                        method: method,
                        data: data,
                        header: {
                                'content-type': 'application/json',
                                'appkey': config.appkey
                        },
                        success: (res) => {
                                let code = res.statusCode.toString();

                                if (code.startsWith('2')) {
                                        resolve(res);
                                } else {
                                        resolve(res);
                                        let error_code = res.data.error_code;
                                        this._show_error(error_code);
                                }
                        },
                        fail: (err) => {
                                reject(err);
                                this._show_error(1);
                        }
                });
        }

        _show_error(error_code) {
                if (!error_code) {
                        error_code = 1;
                }
                wx.showToast({
                        title: tips[error_code],
                        icon: 'none',
                        duration: 1500
                });
        }
}

export {
        Http
}