'use strict'

import React from 'react';

const ListingItem = React.createClass({

    render: function() {
        const listing = this.props.listing.data;
        const link = 'http://reddit.com' + listing.permalink;

        return (
            <li className="listing">
                <a href={ link }>{ listing.title }</a>
            </li>
        );
    }
});

export default ListingItem;
