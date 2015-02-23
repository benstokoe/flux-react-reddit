var React = require('react'),
    RedditAPIUtils = require('../utils/RedditAPIUtils'),
    SubredditStore = require('../stores/SubredditStore');

var Reddit = React.createClass({
    
    getInitialState: function() {
        RedditAPIUtils.getSubreddits();

        return {

        };
    },

    render: function() {
        return (
            <h1>Woooo Flux</h1>
        );
    }
});

module.exports = Reddit;
