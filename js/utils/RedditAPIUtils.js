'use strict'

import RedditActions from '../actions/RedditActions';
import API from './API';

const RedditAPIUtils = {
    url: 'http://www.reddit.com',

    getSubreddits: function() {
        RedditActions.loadingSubreddits();

        try {
            API.get(this.url + '/subreddits/popular.json')
                .end(function(error, res) {
                    RedditActions.loadedSubreddits(res.body.data.children);
                });
        } catch(e) {
            RedditActions.errorLoadingSubreddits();
        }
    },

    getListings: function(subreddit) {
        RedditActions.loadingListings();

        let listingUrl = '/hot.json';

        if (subreddit !== '' && subreddit !== undefined) {
            listingUrl = '/r/' + subreddit + '/hot.json';
        }

        try {
            API.get(this.url + listingUrl)
                .end(function(error, res) {
                    RedditActions.loadedListings(res.body.data.children);
                });
        } catch(e) {
            RedditActions.errorLoadingSubreddits();
        }
    }
};

export default RedditAPIUtils;
