'use strict'

import React from 'react';
import { Link } from 'react-router';

const SubredditItem = React.createClass({

    render: function() {
        return (
            <Link to="subreddit" params={{subreddit: this.props.subName }} className="subreddit">{this.props.subName}</Link>
        );
    }

});

export default SubredditItem;
