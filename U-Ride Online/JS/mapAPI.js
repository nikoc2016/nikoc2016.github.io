var map;
var geoloccontrol
var marker1, marker2;
var directionsService;
var directionsDisplay;
var travelDistance;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  //Direction Service
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  directionsDisplay.setMap(map);

  // Try HTML5 geolocation.
 	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
  			var pos = {
  				lat: position.coords.latitude,
  				lng: position.coords.longitude
  			};
  			map.setCenter(pos);
  			var geocoder = new google.maps.Geocoder;
  			geocoder.geocode({'location': pos}, function(results, status) {
  				if (status === 'OK') {
  					if (results[1]) {
  						map.setZoom(17);
  						marker1 = new google.maps.Marker({
  							position: pos,
  							map: map
  						});
  						$("#getFromBox").val(results[1].formatted_address);
              $("#giveFromBox").val(results[1].formatted_address);
  					} else {
  						$("#getFromBox").val("US");
  					}
  				} else {
  					$("#getFromBox").val(status);
  				}
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

function clearMarkers(){
	if (marker1) marker1.setMap(null);
	if (marker2) marker2.setMap(null);
}

function drawPath(fromDest, toDest, isGet){
	if (fromDest != "" && toDest != "") {
    clearMarkers();
		directionsService.route({
			origin: fromDest,
			destination: toDest,
			travelMode: 'DRIVING'
		}, function(response, status) {
			if (status === 'OK') {
				directionsDisplay.setDirections(response);
				travelDistance = response.routes[0].legs[0].distance.value;
				pushInfo(true, "Distance: " + travelDistance + " Meters");
        $("#globalCancelButton").fadeOut();
        if (isGet)
				  getRideDriverHandle(1);
        else
          giveRidePassengerHandle(1);
			} else {
        if (isGet)
          getRideDriverHandle(0);
        else
          giveRidePassengerHandle(0);
				pushInfo(false, 'Directions request failed due to ' + status);
			}
		});
	}
}