var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'images/Harry.jpg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'images/królLew.jpg'
    },
      {
      id: 3,
      title: 'Skazany na śmierć',
      desc: 'Serial o skazańcu i jego losach',
      img: 'images/skazany.jpg'
    },
      {
      id: 4,
      title: 'Eragon',
      desc: 'Film o chłopcu, który wszedł w posiadanie smoka',
      img: 'images/eragon.jpg'
    },
      {
      id: 5,
      title: 'Chłopaki z baraków',
      desc: 'Serial o mieszkańcach baraków i ich przygodach',
      img: 'images/chlopaki.jpg'
    }
  ];

  

  var MovieDesc = React.createClass({
    render: function() {
      return (
        React.createElement('p', {}, this.props.desc)
      )
    },
    propTypes: {
      desc: React.PropTypes.string
    }
  });

  var MovieTitle = React.createClass({
    render: function() {
      return (
        React.createElement('p', {}, this.props.title)
      )
    },
    propTypes: {
      title: React.PropTypes.string
    }
  });

var Movie = React.createClass({
  render: function(){
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc}),
        React.createElement('img', {src: this.props.movie.img})
      )
    )
  },
  propTypes: {
    src: React.PropTypes.object,
  }
});  

var moviesList = movies.map(function(movie) {
    return (
      React.createElement(Movie, {movie, key: movie.id})
      )
  });

  var MovieList = React.createClass({
    render: function() {
      return (
        React.createElement('div', {}, 
          React.createElement('h1', {}, 'Lista filmów'),
          React.createElement('ul', {}, moviesList)
        )
      )
    },

    propTypes: {
      mov: React.PropTypes.array,
    }
  });

  var element = React.createElement(MovieList, {mov: moviesList})
  ReactDOM.render(element, document.getElementById('app'));