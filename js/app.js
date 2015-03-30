'use strict'

import React from 'react';
import router from './router';
import Reddit from './components/Reddit.react';
import RedditAPIUtils from './utils/RedditAPIUtils';

RedditAPIUtils.getSubreddits();

router.run(function (Handler) {
    React.render(
        <Handler />,
        document.getElementById('reddit')
    );
});
