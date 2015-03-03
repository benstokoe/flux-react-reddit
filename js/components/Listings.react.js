var React = require('react'),
    _ = require('underscore'),
    ListingStore = require('../stores/ListingStore'),
    RedditAPIUtils = require('../utils/RedditAPIUtils'),
    ListingItem = require('./ListingItem.react');

var Listing = React.createClass({

    getInitialState: function() {
        return {
            listings: ''
        }
    },

    componentDidMount: function() {
        RedditAPIUtils.getListings(this.props.subreddit);
        ListingStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
       ListingStore.removeChangeListener(this._onChange);
    }, 

    render: function() {
        var listings = [];

        if (!_.isEmpty(this.state.listings)) { 
            this.state.listings.map(function(listing) {
                listings.push(<ListingItem listing={listing} />);
            });
        } else {
            listings = <p>Loading</p>;
        }

        return (
            <ul id="listings">
                { listings }
            </ul>
       );
    },

    _onChange: function() {
        this.setState({
            listings: ListingStore.getListings()
        });
    }
});

module.exports = Listing;
