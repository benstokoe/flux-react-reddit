'use strict'

import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import RedditConstants from '../constants/RedditConstants';
import Immutable from 'immutable';

const CHANGE_EVENT = 'change';

let _listings;

function setListings(listings) {
    _listings = Immutable.List(listings);
}

const ListingStore = assign({}, EventEmitter.prototype, {

    getListings: function() {
        return _listings.toArray();
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
        case RedditConstants.LISTINGS_LOADING:
            break;

        case RedditConstants.LISTINGS_LOADING_SUCCESS:
            setListings(action.listings);
            ListingStore.emitChange();
            break;

        case RedditConstants.LISTINGS_LOADING_ERROR:
            console.log('loading error');
            break;

        default:
            return true;
    }
});

export default ListingStore;
