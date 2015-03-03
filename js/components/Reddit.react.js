var React = require('react'),
    RedditAPIUtils = require('../utils/RedditAPIUtils'),
    Subreddits = require('./Subreddits.react'),
    Listings = require('./Listings.react');

var Reddit = React.createClass({
    
    getInitialState: function() {
        return {
            currentSubreddit: ''
        };
    },

    render: function() {
        return (
            <div>
                <h1>Reddit</h1>
                <Subreddits />
                <Listings subreddit={this.state.currentSubreddit} />
            </div>
        );
    }
});

module.exports = Reddit;
