var React = require('react');

var SubredditItem = React.createClass({

    render: function() {
        return (
            <a className="subreddit" href="#">{this.props.subName}</a>
        );
    }

});

module.exports = SubredditItem;
