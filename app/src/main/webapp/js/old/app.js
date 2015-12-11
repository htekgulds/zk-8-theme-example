zk.afterMount(function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var MessageBox = require('./message-box');

    var reactComponent = ReactDOM.render(
        <MessageBox />,
        document.getElementById('app')
    );
});