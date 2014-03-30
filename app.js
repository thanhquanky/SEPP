/*
var testUrl = "http://unispon.com/hackduke/index.php/walkscore/";
ajax({ url: testUrl, type: 'json' }, function(data) {
    simply.text({ title: data.teamname, subtitle: data.people });
});
*/

navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
 
    var latlong = coords.latitude + "," + coords.longitude ;
    simply.text({ title: "Current location", subtitle: latlong });
  
});
