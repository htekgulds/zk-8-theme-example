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

var zkbinder = zkbind.$('$app');

var Feed = React.createClass({

    loadData: function () {
        var self = this;
        zkbinder.after('doItemsChange', function (data) {

            var sorted = _.sortBy(data, function (item) {
                return -item.voteCount;
            });

            self.setState({
                items: sorted
            });
        });
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
        }, function () {
            zkbinder.command('doAddItem', newItem);
        });
    },

    onVote: function (item) {
        zkbinder.command('doUpdateVote', item);
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