'use strict'

import request from 'superagent';

const API = {
    get: function(url) {
        return request
                .get(url);
    }
};

export default API;
