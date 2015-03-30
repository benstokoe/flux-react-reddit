'use strict'

import React from 'react';
import { State } from 'react-router';
import RedditAPIUtils from '../utils/RedditAPIUtils';
import Subreddits from './Subreddits.react';
import Listings from './Listings.react';

const Reddit = React.createClass({

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

export default Reddit;
