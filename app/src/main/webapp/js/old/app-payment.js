/** @jsx React.DOM */

/**
 * App Component
 * */
var App = React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function () {
        return {
            payment: 0,
            payment2: 0
        };
    },

    render: function () {
        var total = parseInt(this.state.payment, 10) + parseInt(this.state.payment2, 10);
        return (
            <div>
                <Payment valueLink={this.linkState('payment')} />
                <Payment valueLink={this.linkState('payment2')} />
                {total}
            </div>
        );
    }
});

/**
 * Payment Component
 * */
var Payment = React.createClass({

    render: function () {
        return (
            <input type="text" valueLink={this.props.valueLink}/>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);