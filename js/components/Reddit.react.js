var React = require('react'),
    RedditAPIUtils = require('../utils/RedditAPIUtils'),
    Subreddits = require('./Subreddits.react');

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
            </div>
        );
    }
});

module.exports = Reddit;
