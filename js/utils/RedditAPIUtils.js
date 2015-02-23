var SubredditActions = require('../actions/SubredditActions'),
    API = require('./API');

var RedditAPIUtils = {
    getSubreddits: function() {
        SubredditActions.loadingSubreddits();

        try {
            // get data
            console.log('getting data');
            SubredditActions.loadedSubreddits();
        } catch(e) {
            SubredditActions.errorLoadingSubreddits();
        }
    }
};

module.exports = RedditAPIUtils;
