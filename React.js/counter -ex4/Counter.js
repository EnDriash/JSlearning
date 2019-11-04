const Counter = React.createClass({
    detDefaultProps: function(){

    },
    getInitialState: function() {
        return {
          counter: 0 
        };
    },
    componentWillMount: function(){
        console.log(' willmount');
    },
    componentDidMount: function(){
        console.log(' didmount');
    },

    componentWillReceiveProps: function(){
        console.log(' willreciveprops');
    },
    shouldComponentUpdate: function(){
        return true;
    },
    componentWillUpdate: function(){
        console.log(' willupdate');
    },
    
    componentDidUpdate: function(){
        console.log(' didupdate');
    },
    componentWillUnmount: function(){
        console.log(' unmount');
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
   

    
    render: function() {
        return React.createElement('div',{},
            React.createElement('span',{},`Licznik pokazuje: ` + this.state.counter),
            React.createElement('button',{onClick: this.increment},'Increment'),
            React.createElement('button',{onClick: this.decrement},'Decrement')
        )
    }
    
});

var elem = React.createElement('div',{},
React.createElement(Counter),
React.createElement(Counter)
);

ReactDOM.render(elem, document.getElementById('app'));