'use strict'

import React from 'react';
import _ from 'underscore';
import ListingStore from '../stores/ListingStore';
import RedditAPIUtils from '../utils/RedditAPIUtils';
import ListingItem from './ListingItem.react';

const Listings = React.createClass({

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
        let listings = [];

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

export default Listings;
