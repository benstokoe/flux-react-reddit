var React = require('react'),
    { Link } = require('react-router');

var SubredditItem = React.createClass({

    render: function() {
        return (
            <Link to="subreddit" params={{subreddit: this.props.subName }} className="subreddit">{this.props.subName}</Link>
        );
    }

});

module.exports = SubredditItem;
