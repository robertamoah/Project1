

var lati=[]
var longi=[]
var rename=[]
var readdress=[]
var centerLongi=[]
var centerLati=[]



// var  p = {
//   centerLongi:centerLongi,
//   centerLati:centerLati
// }


console.log("lati",lati)
console.log("longi",longi)
console.log("rename",rename)
console.log(readdress)


// for(var b=0; b<1; b++){
//   console.log("centerLng",centerLongi[b])
//   console.log("centerlat",centerLati[b])
// }


// makes map////////////////////////////////////////////////////////
var map;
function initMap() {

  
  var final =window.records
  console.log("hellosnfn",final)

  // creating a new map//
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:40.9168,lng: -74.1718},
    zoom: 15
  });
 








  var infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
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
////////////////////////////////////////////////////////////////////

  





// Adds the marker//////////////////////////////////////////////////
function addMaker(coords){

  var marker = new google.maps.Marker({
    position:coords,
    map:map
  });

  return marker

}
//////////////////////////////////////////////////////////////////////








// foursquare api call///////////////////////////////////////////////
var ourRequest = new XMLHttpRequest();
ourRequest.open("GET","https://api.foursquare.com/v2/venues/explore?cat=&near=paterson&client_id=MJ1WCPB5DROKCZ54T0U0F1RLR3JJIEEFOBMPRVU0DECNRAQJ&client_secret=3BYYGW4CSRPFTLJZRIXG1XEE2Q4DARJUZA24YRN4OPO1K0NO&v=20180323&limit=100") 
// ///////////////////////////////////////////////////////////////////






// ajax call////////////////////////////////////////////////////////////
ourRequest.onload= function(){
  var ourData= JSON.parse(ourRequest.responseText);
  console.log(ourData)

  var centerLat =ourData.response.geocode.center.lat
  var centerLng =ourData.response.geocode.center.lng

  console.log("centerLng",centerLat)
  console.log("centerlat",centerLng)
  centerLongi.push(centerLat)
  centerLati.push(centerLng)



for(var i=0; i<100; i++){




var name = ourData.response.groups[0].items[i].venue.name

$(".side").append("<h1 class='head' >"+name+"</h1>")

// console.log(name)
rename.push(name)


for(var j=0; j<2; j++) {
var address=ourData.response.groups[0].items[i].venue.location.formattedAddress[j]
console.log(address)
$(".side").append("<div class='info'>" +address + "<div>")
readdress.push(address)
}





  for(var r=0; r<1; r++) {
  
var cordslat =ourData.response.groups[0].items[i].venue.location.lat
console.log(cordslat)
var cordslng =ourData.response.groups[0].items[i].venue.location.lng
console.log(cordslng)



lati.push(cordslat)
longi.push(cordslng)


// loops the foursqaure marker on the map/////////////////////////
var dave = addMaker({lat: cordslat, lng: cordslng})

var x = {
  name: name,
  address:address
}

var robert =rename;

addInfoWindow(dave, x)
// ////////////////////////////////////////////////////////////////




function addInfoWindow(marker, message) {

  var infoWindow = new google.maps.InfoWindow({
      content: "<h1>" + message.name + ". "+ "<br>" +"<hr />" + message.address + "</h1"
  });
  google.maps.event.addListener(marker, 'mouseover', function () {
      infoWindow.open(map, marker);

  });
  google.maps.event.addListener(marker, 'mouseout', function(){
    infoWindow.close();
 });
}




}}}









// intiats the foursquare api/////////////////////////////////////
ourRequest.send();
//////////////////////////////////////////////////////////////////











