var item ={
        name: 'Kotek',
        src: 'http://imgur.com/n8OYCzR.png',
};

var GalleryItem = React.createClass({
    

    render: function(){
        return (
            React.createElement('div', {},
                React.createElement('h2', {}, this.props.item.name),
                React.createElement('img', {src: this.props.item.src})
            )
        )
    }
});
var elem = React.createElement(GalleryItem, {item});
ReactDOM.render(elem, document.getElementById('app'));