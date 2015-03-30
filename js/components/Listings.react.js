var React = require('react'),
    _ = require('underscore'),
    ListingStore = require('../stores/ListingStore'),
    RedditAPIUtils = require('../utils/RedditAPIUtils'),
    ListingItem = require('./ListingItem.react');

var Listings = React.createClass({

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

    componentWillReceiveProps: function() {
        RedditAPIUtils.getListings(this.props.subreddit);
    },

    render: function() {
        var listings = [];

        if (!_.isEmpty(this.state.listings)) { 
            this.state.listings.map(function(listing) {
                listings.push(<ListingItem key={listing.data.id} listing={listing} />);
            });
        } else {
            listings = <p>Loading</p>;
        }

        return (
            <ul id="listings" key={this.props.subreddit}>
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

module.exports = Listings;
