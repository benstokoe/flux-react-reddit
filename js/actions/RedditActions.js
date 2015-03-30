var AppDispatcher = require('../dispatcher/AppDispatcher'),
    RedditConstants = require('../constants/RedditConstants');

var RedditActions = {
    loadingSubreddits: function() {
        AppDispatcher.dispatch({
            actionType: RedditConstants.SUBREDDITS_LOADING
        });
    },

    loadedSubreddits: function(subreddits) {
        AppDispatcher.dispatch({
            actionType: RedditConstants.SUBREDDITS_LOADING_SUCCESS,
            subreddits: subreddits
        });
    },

    errorLoadingSubreddits: function() {
        AppDispatcher.dispatch({
            actionType: RedditConstants.SUBREDDITS_LOADING_ERROR
        });    
    },

    loadingListings: function() {
        AppDispatcher.dispatch({
            actionType: RedditConstants.LISTINGS_LOADING
        });
    },

    loadedListings: function(listings) {
        AppDispatcher.dispatch({
            actionType: RedditConstants.LISTINGS_LOADING_SUCCESS,
            listings: listings
        });
    },

    errorLoadingListings: function() {
        AppDispatcher.dispatch({
            actionType: RedditConstants.LISTINGS_LOADING_ERROR
        });
    }
};

module.exports = RedditActions;
