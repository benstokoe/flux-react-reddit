var SubredditActions = require('../actions/SubredditActions'),
    API = require('./API');

var RedditAPIUtils = {
    getSubreddits: function() {
        SubredditActions.loadingSubreddits();

        var subreddits = {};

        try {
            API.get('http://www.reddit.com/subreddits/popular.json')
                .end(function(error, res) {
                    SubredditActions.loadedSubreddits(res.body.data.children);
                });
        } catch(e) {
            SubredditActions.errorLoadingSubreddits();
        }
    }
};

module.exports = RedditAPIUtils;
