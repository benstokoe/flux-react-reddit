var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change',
    RedditConstants = require('../constants/RedditConstants'),
    _subreddits = {};

function setSubreddits(subreddits) {
    _subreddits = subreddits;
}

var SubredditStore = assign({}, EventEmitter.prototype, {

    getSubreddits: function() {
        return _subreddits;
    },

	emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }


});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case RedditConstants.SUBREDDITS_LOADING:
            break;

        case RedditConstants.SUBREDDITS_LOADING_SUCCESS:
            setSubreddits(action.subreddits);
            SubredditStore.emitChange();
            break;

        case RedditConstants.SUBREDDITS_LOADING_ERROR:
            console.log('loading error');
            break;

        default:
            return true;
    }
});

module.exports = SubredditStore;
