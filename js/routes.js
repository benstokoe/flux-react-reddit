var React = require('react'),
    { Route, DefaultRoute } = require('react-router'),
    Reddit = require('./components/Reddit.react');

var routes = (
    <Route handler={Reddit} path="/">
        <Route name="subreddit" path="/:subreddit" handler={Reddit} />
        <DefaultRoute handler={Reddit} />
    </Route>
);

module.exports = routes;
