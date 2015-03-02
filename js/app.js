var React = require('react'),
    router = require('./router'),
    Reddit = require('./components/Reddit.react'),
    RedditAPIUtils = require('./utils/RedditAPIUtils');

RedditAPIUtils.getSubreddits();

router.run((Handler) => {
    React.render(
        <Handler />,
        document.getElementById('reddit')
    );
});
