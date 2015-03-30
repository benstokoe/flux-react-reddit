var React = require('react'),
    { State } = require('react-router'),
    RedditAPIUtils = require('../utils/RedditAPIUtils'),
    Subreddits = require('./Subreddits.react'),
    Listings = require('./Listings.react');

var Reddit = React.createClass({

    mixins: [ State ],
    
    getInitialState: function() {
        return {
            currentSubreddit: ''
        };
    },

    componentDidMount: function() {
        this._onChange();
    },

    componentWillReceiveProps: function() {
        this._onChange();
    },

    render: function() {
        return (
            <div>
                <h1>Reddit</h1>
                <Subreddits key="subreddits" />
                <Listings key={this.state.currentSubreddit} subreddit={this.state.currentSubreddit} />
            </div>
        );
    },

    _onChange: function() {
        this.setState({
            currentSubreddit: this.getParams().subreddit
        });
    }
});

module.exports = Reddit;
