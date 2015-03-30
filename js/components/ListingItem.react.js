'use strict'

import React from 'react';

const ListingItem = React.createClass({

    render: function() {
        const listing = this.props.listing.data;

        return (
            <li className="listing">
                <a href={listing.permalink}>{ listing.title }</a>
            </li>
        );
    }
});

export default ListingItem;
