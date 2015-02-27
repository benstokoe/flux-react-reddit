var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change',
    SubredditConstants = require('../constants/SubredditConstants'),
    _subreddits = {};

function setSubreddits(subreddits) {
    console.log('Setting subreddits to', subreddits);
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
        case SubredditConstants.SUBREDDITS_LOADING:
            console.log('loading');
            break;

        case SubredditConstants.SUBREDDITS_LOADING_SUCCESS:
            console.log('loading success');
            setSubreddits(action.subreddits);
            SubredditStore.emitChange();
            break;

        case SubredditConstants.SUBREDDITS_LOADING_ERROR:
            console.log('loading error');
            break;

        default:
            return true;
    }
});

module.exports = SubredditStore;
