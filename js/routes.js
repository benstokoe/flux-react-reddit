'use strict'

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Reddit from './components/Reddit.react';

const routes = (
    <Route handler={Reddit} path="/">
        <Route name="subreddit" path="/:subreddit" handler={Reddit} />
        <DefaultRoute handler={Reddit} />
    </Route>
);

export default routes;
