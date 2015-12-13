/**
 * Created by Hasan TEKGÜL
 * on 12.12.2015.
 *
 * FeedItem Component
 */

var React = require('react');

var FeedItem = React.createClass({

    vote: function (newCount) {
        this.props.onVote({
            key: this.props.item.key,
            voteCount: newCount
        });
    },
    
    voteUp: function () {
        var count = parseInt(this.props.item.voteCount, 10);
        var newCount = count + 1;
        this.vote(newCount);
    },

    voteDown: function () {
        var count = parseInt(this.props.item.voteCount, 10);
        var newCount = count - 1;
        this.vote(newCount);
    },

    render: function () {

        var badgeClassName = this.props.item.voteCount >= 0 ? 'badge badge-success' : 'badge badge-danger';
        return (
            <li className="list-group-item">
                <span className={badgeClassName}>{this.props.item.voteCount}</span>
                <h4>{this.props.item.title}</h4>
                <span>{this.props.item.description}</span>
                <span className="pull-right">
                    <button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
                    <button id="down" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
                </span>
            </li>
        );
    }
});

module.exports = FeedItem;