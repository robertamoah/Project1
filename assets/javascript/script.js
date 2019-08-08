

// FOURSQUARE API CALL//
fetch('https://api.foursquare.com/v2/venues/explore?cat=food&near=paterson&client_id=MJ1WCPB5DROKCZ54T0U0F1RLR3JJIEEFOBMPRVU0DECNRAQJ&client_secret=3BYYGW4CSRPFTLJZRIXG1XEE2Q4DARJUZA24YRN4OPO1K0NO&v=20180323&limit=40')
.then(resp => resp.json())
.then(result  => console.log(result));





<<<<<<< HEAD
//GOOGLE MAPS API CALL//
var map;
function createMap(){
  var options ={
    center:{lat:-33.867, lng:151.195},
    zoom: 10
  };
  map= new google.maps.Map(document.getElementById("map"), options)
};
=======
// /////////////////////////////////////////////////////////////////









//GOOGLE MAPS API CAL//
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
// /////////////////////////////////////////////////////////////////

>>>>>>> robert


