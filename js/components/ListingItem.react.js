var React = require('react');

var ListingItem = React.createClass({

    render: function() {
        var listing = this.props.listing.data;

        return (
            <li className="listing">
                <a href={listing.permalink}>{ listing.title }</a>
            </li>
        );
    }
});

module.exports = ListingItem;
