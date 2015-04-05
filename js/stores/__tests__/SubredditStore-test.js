jest.dontMock('../SubredditStore');
jest.dontMock('object-assign');
jest.dontMock('../../utils/API');
jest.dontMock('../../utils/RedditAPIUtils');

describe('SubredditStore', function() {
    var SubredditConstants = require('../../constants/SubredditConstants'),
        RedditAPIUtils = require('../../utils/RedditAPIUtils'),
        AppDispatcher,
        callback,
        SubredditStore;

    beforeEach(function() {
        AppDispatcher = require('../../dispatcher/AppDispatcher');
        SubredditStore = require('../SubredditStore');
        callback = AppDispatcher.register.mock.calls[0][0];

        RedditAPIUtils.getSubreddits();
    });

    it('gets the popular subreddits from Reddit', function() {
        var subreddits = SubredditStore.getSubreddits();

        console.log(subreddits);
    });
});
