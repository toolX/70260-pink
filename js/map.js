function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.9367331, 30.3204011)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  var image = "img/icon-map-marker.svg";
  var myLatLng = new google.maps.LatLng(59.936300, 30.321217);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
