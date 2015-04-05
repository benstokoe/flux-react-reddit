'use strict'

import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import RedditConstants from '../constants/RedditConstants';
import Immutable from 'immutable';

const CHANGE_EVENT = 'change';

let _subreddits;

function setSubreddits(subreddits) {
    _subreddits = Immutable.List(subreddits);
}

const SubredditStore = assign({}, EventEmitter.prototype, {

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

export default SubredditStore;
