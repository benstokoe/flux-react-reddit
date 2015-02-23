var AppDispatcher = require('../dispatcher/AppDispatcher'),
    SubredditConstants = require('../constants/SubredditConstants');

var SubredditActions = {
    loadingSubreddits: function() {
        console.log('SubredditActions loadingSubreddits');
        AppDispatcher.dispatch({
            actionType: SubredditConstants.SUBREDDITS_LOADING
        });
    },

    loadedSubreddits: function(subreddits) {
        console.log('SubredditActions loadedSubreddits');
        AppDispatcher.dispatch({
            actionType: SubredditConstants.SUBREDDITS_LOADING_SUCCESS,
            subreddits: subreddits
        });
    },

    errorLoadingSubreddits: function() {
        console.log('SubredditActions errorLoadingSubreddits');
        AppDispatcher.dispatch({
            actionType: SubredditConstants.SUBREDDITS_LOADING_ERROR
        });        
    }
};

module.exports = SubredditActions;
