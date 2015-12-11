/** @jsx React.DOM */

/**
 * Dashboard Component
 * */
var Dashboard = React.createClass({

    loadData: function (url) {
        return $.get('https://gsr-demo.firebaseio-demo.com/' + url + '/.json');
    },

    componentWillMount: function () {
        //debugger;
    },

    componentDidMount: function () {
        //debugger;
        this.loadData(this.props.url).then(function (data) {
            this.setState({
                metric: data
            });
            $('#tip').tooltip();
        }.bind(this));
    },

    componentWillUnmount: function () {
        //debugger;
        // Cleanup so tooltip event listeners are trashed
        $('#tip').tooltip('destroy');
    },
    
    componentWillReceiveProps: function (nextProps) {
        var lastUrl = this.props.url;
        this.loadData(nextProps.url).then(function (data) {
            this.setState({
                lastRoute: lastUrl,
                metric: data
            });
        }.bind(this));
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        return nextState.metric > 100;
    },

    getInitialState: function () {
        return {
            metric: 0,
            lastRoute: ''
        };
    },

    render: function () {
        return (
            <div className="jumbotron">
                {this.state.lastRoute}
                <h2>{this.state.metric}</h2>
                <a id="tip" href="#" data-toggle="tooltip" title="Hover!">Hover over me</a>
            </div>
        );
    }
});

var dashComponent = ReactDOM.render(
    <Dashboard url="metric"/>,
    document.getElementById('app')
);