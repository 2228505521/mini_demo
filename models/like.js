
import {Http} from "../utils/http";

class LikeModel extends Http {


    postLike(behavior, artId, category, sCallback) {
        let url = behavior ? 'like' : 'like/cancel';

        this.request({
            url: url,
            method: 'POST',
            data: {
                art_id: artId,
                type: category
            },
            success: (res) => {

            },
            fail: (err) => {

            }
        });
    }
}

export {LikeModel}