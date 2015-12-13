/**
 * Created by Hasan TEKGÜL
 * on 12.12.2015.
 *
 * FeedList Component
 */

var React = require('react');
var FeedItem = require('./feed-item');

var FeedList = React.createClass({

    render: function () {
        var feedItems = this.props.items.map(function (item) {
            return <FeedItem key={item.key} item={item} onVote={this.props.onVote}/>
        }.bind(this));
        return (
            <ul className="list-group">
                {feedItems}
            </ul>
        );
    }
});

module.exports = FeedList;