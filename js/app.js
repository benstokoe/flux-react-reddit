var React = require('react'),
    router = require('./router'),
    Reddit = require('./components/Reddit.react'),
    RedditAPIUtils = require('./utils/RedditAPIUtils');

RedditAPIUtils.getSubreddits();

router.run(function (Handler) {
    React.render(
        <Handler />,
        document.getElementById('reddit')
    );
});
