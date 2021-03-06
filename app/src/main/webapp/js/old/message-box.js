var React = require('react');
var SubMessage = require('./sub-message');
var Dashboard = require('./dashboard');
var _ = require('lodash');

var MessageBox = React.createClass({

    deleteMessage: function (message) {
        var newMessages = _.without(this.state.messages, message);
        this.setState({
            messages: newMessages
        });
    },

    handleAdd: function (e) {
        var newMessage = this.refs.newMessage.value;
        var newMessages = this.state.messages.concat(newMessage);
        this.setState({
            messages: newMessages
        });
    },

    getInitialState: function () {
        return {
            isVisible: true,
            messages: [
                'I like the world',
                'Coffee flavored ice cream is highly underrated',
                'Tuesday is coming. Did you bring your coat?',
                'I am a banana'
            ]
        }
    },

    render: function() {
        var inlineStyles = {
            display: this.state.isVisible ? 'block' : 'none'
        };
        var messages = this.state.messages.map(function (message) {
            return <SubMessage key={this.state.messages.indexOf(message)} message={message} onDelete={this.deleteMessage} />;
        }.bind(this));

        return (
            <div className="container jumbotron" style={inlineStyles}>
                <h2>Hello World!</h2>
                <Dashboard url="metric2"/>
                <input ref="newMessage" type="text"/>
                <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
                {messages}
            </div>
        );
    }
});

module.exports = MessageBox;