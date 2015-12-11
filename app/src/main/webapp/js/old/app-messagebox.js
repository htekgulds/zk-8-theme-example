/** @jsx React.DOM */

/**
 * MessageBox Component
 * */
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
            return <SubMessage key={message.id} message={message} onDelete={this.deleteMessage} />;
        }.bind(this));

        return (
            <div className="container jumbotron" style={inlineStyles}>
                <h2>Hello World!</h2>
                <input ref="newMessage" type="text"/>
                <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
                {messages}
            </div>
        );
    }
});

/**
 * SubMessage Component
 * */
var SubMessage = React.createClass({
    
    handleDelete: function (e) {
        this.props.onDelete(this.props.message);
    },

    propTypes: {
        message: React.PropTypes.string.isRequired
    },

    getDefaultProps: function () {
        return {
            message: 'Its good to see you'
        }
    },

    render: function () {
        return (
            <div>
                {this.props.message}
                <button onClick={this.handleDelete} className="btn btn-danger">x</button>
            </div>
        );
    }
});

/* Render */
var reactComponentJSX = ReactDOM.render(
    <MessageBox/>,
    document.getElementById('jsx')
);