var elem = document.querySelector('.carousel');
var progressBar = document.querySelector('.progress-bar');
var refresh = document.querySelector(".refresh");

var slajdparams = [
    {
        id: 0,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Gizeh_Cheops_BW_1.jpg/1280px-Gizeh_Cheops_BW_1.jpg',
        title: 'Wielka piramida Cheopsa',
        descripton: '<p>Lorem ipsum.</p> <p>Dolor sit.</p>',
        coords: {lat: 29.9791, lng: 31.134199999999964}
        
    },
    {
        id: 0,
        image: 'https://i.ytimg.com/vi/k81YqpMQsho/maxresdefault.jpg',
        title: 'Wiszące ogrody Babilonu',
        descripton: '<p>Lorem ipsum.</p> <p>Dolor sit.</p>',
        coords: {lat: 30.048819, lng: 31.243666}
    },
    {
        id: 0,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ac_artemisephesus.jpg/1024px-Ac_artemisephesus.jpg',
        title: "Ruiny świątyni Artemidy w Efezie",
        descripton: '<p>Lorem ipsum.</p>  <p>Dolor sit.</p>',
        coords: {lat: 37.9, lng: 21.63}
    },
    {
        id: 0,
        image: 'https://vignette.wikia.nocookie.net/artemisfowl/images/e/ec/Pos%C4%85gZeusa.jpg/revision/latest?cb=20150315150535&path-prefix=pl',
        title: 'Posąg Zeusa w Olimpii',
        descripton: '<p>Lorem ipsum.</p> <p>Dolor sit.</p>',
        coords: {lat: 38.247, lng: 25.942299999999932}
    },
    {
        id: 0,
        image: 'https://vignette.wikia.nocookie.net/artemisfowl/images/4/48/MauzoleumHalikarnas.jpg/revision/latest?cb=20150315150535&path-prefix=pl',
        title: 'Mauzoleum w Halikarnasie',
        descripton: '<p>Lorem ipsum.</p> <p>Dolor sit.</p>',
        coords: {lat: 37.0668164, lng: 27.4845304}
    },
    {
        id: 0,
        image: 'https://wf2.xcdn.pl/files/15/11/02/471599_Fj8x_Colossus_of_Rhodes_83.jpg',
        title: 'Kolos Rodyjski',
        descripton: '<p>Lorem ipsum.</p> <p>Dolor sit.</p>',
        coords: {lat: 36.4379874, lng: 28.2233083}
    },
    {
        id: 0,
        image: 'https://archigame.pl/wp-content/uploads/2017/11/Assassins-Creed%C2%AE-Origins_20171126131333-1024x576.jpg',
        title: 'Latarnia morska na Faros',
        descripton: '<p>Lorem ipsum.</p> <p>Dolor sit.</p>',
        coords: {lat: 31.199, lng: 29.8944}
    }
];


// Mustache template Section
var slajdtemplate = document.getElementById('template-slajd').innerHTML;
Mustache.parse(slajdtemplate);

var slajdlist = '';
for( var i = 0; i < slajdparams.length; i++){
    slajdparams[i].id = i;
   slajdlist += Mustache.render(slajdtemplate,slajdparams[i]);
   
}
elem.insertAdjacentHTML('beforeend', slajdlist);

// Flickity Plugin Section Section

var flkty = new Flickity( elem, {
  
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});

refresh.addEventListener("click", function(){
    flkty.selectCell(0);
});



// Google Map Section
window.initMap = function(){
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4, 
        center: slajdparams[0].coords 
    });

    var markers = new Array();

    for(var i = 0; i < slajdparams.length; i++ ){
        markers[i] = new google.maps.Marker({
            position: slajdparams[i].coords,
            map: map,
            index: i
        });

        markers[i].addListener('click', function(){
            flkty.selectCell(this.index);
        });
    };
    flkty.on( 'change', function( index ) {
        map.panTo(slajdparams[index].coords);
        map.setZoom(10);
    });
};