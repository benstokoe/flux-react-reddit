var request = require('superagent');

var API = {
    get: function(url) {
        return request
                .get(url);
    }
};

module.exports = API;
