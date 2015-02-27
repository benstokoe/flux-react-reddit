var React = require('react'),
    Reddit = require('./components/Reddit.react'),
    RedditAPIUtils = require('./utils/RedditAPIUtils');

RedditAPIUtils.getSubreddits();

React.render(
    <Reddit />,
    document.getElementById('reddit')
);
