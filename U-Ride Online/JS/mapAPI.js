var map;
var geoloccontrol
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  // Try HTML5 geolocation.
 	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
  			var pos = {
  				lat: position.coords.latitude,
  				lng: position.coords.longitude
  			};
  			map.setCenter(pos);

  			var marker = new google.maps.Marker({
  				position: pos,
  				map: map,
  				title: 'Me'
  			});
  		}, function() {
  			handleLocationError(true, infoWindow, map.getCenter());
  		});
 	} else {
 	 // Browser doesn't support Geolocation
  	handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}