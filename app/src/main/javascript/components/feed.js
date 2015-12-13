/**
 * Created by Hasan TEKGÜL
 * on 12.12.2015.
 *
 * Feed Component
 */

var React = require('react');
var ShowAddButton = require('./show-add-button');
var FeedForm = require('./feed-form');
var FeedList = require('./feed-list');
var _ = require('lodash');
var Firebase = require('firebase');

var Feed = React.createClass({

    loadData: function () {
        var ref = new Firebase('https://htds-react-example.firebaseio.com/feed');
        ref.on('value', function (snap) {
            var items = [];
            var sorted = [];

            snap.forEach(function (itemSnap) {
                var item = itemSnap.val();
                item.key = itemSnap.key();
                items.push(item);
            });

            sorted = _.sortBy(items, function (item) {
                return -item.voteCount;
            });

            this.setState({
                items: sorted
            });
        }.bind(this));
    },

    componentDidMount: function() {
        this.loadData();
    },

    getInitialState: function () {
        return {
            items: [],
            formDisplayed: false
        }
    },

    onToggleForm: function () {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    },

    onNewItem: function (newItem) {
        this.setState({
            formDisplayed: false
        });
        var ref = new Firebase('https://htds-react-example.firebaseio.com/feed');
        ref.push(newItem);
    },

    onVote: function (item) {
        var ref = new Firebase('https://htds-react-example.firebaseio.com/feed').child(item.key);
        ref.update(item);
    },

    render: function () {
        return (
            <div className="container">
                <h1 className="jumbotron text-center">VoteIt</h1>
                <div>
                    <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm}/>
                </div>
                <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem}/>
                <br/>
                <br/>
                <FeedList items={this.state.items} onVote={this.onVote} />
            </div>
        );
    }
});

module.exports = Feed;