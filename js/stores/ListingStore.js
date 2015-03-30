var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    CHANGE_EVENT = 'change',
    RedditConstants = require('../constants/RedditConstants'),
    _listings = {};

function setListings(listings) {
    _listings = listings;
}

var ListingStore = assign({}, EventEmitter.prototype, {

    getListings: function() {
        return _listings;
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

module.exports = ListingStore;
