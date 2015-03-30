'use strict'

import React from 'react';
import _ from 'underscore';
import SubredditStore from '../stores/SubredditStore';
import SubredditItem from './SubredditItem.react';

const Subreddits = React.createClass({

    getInitialState: function() {
        return {
            popularSubreddits: {}
        }
    },

    componentDidMount: function() {
        SubredditStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
       SubredditStore.removeChangeListener(this._onChange);
    }, 
    
    render: function() {
        let subreddits = [];
    
        if (!_.isEmpty(this.state.popularSubreddits)) {
            this.state.popularSubreddits.map(function(subreddit) {
                subreddits.push(<SubredditItem key={subreddit.data.id} subName={subreddit.data.display_name} />);
            });
        }

        return (
            <div>
                <h2>Subreddits</h2>
                { subreddits }
            </div>
        );
    },

    _onChange: function() {
        this.setState({
            popularSubreddits: SubredditStore.getSubreddits()
        });
    }

});

export default Subreddits;
