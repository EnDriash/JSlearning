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
  
  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
      );
  });
  
  
  var element = React.createElement('div', {}, 
                      React.createElement('h1', {}, 'Lista filmów'),
                         React.createElement('ul', {}, moviesElements)
      );
  
  ReactDOM.render(element, document.getElementById('app'));