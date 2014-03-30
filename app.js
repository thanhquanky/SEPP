/*var testUrl = "http://unispon.com/hackduke/test.php?firstName=Thanh&lastName=Quan";
ajax({ url: testUrl, type: 'json' }, function(data) {
    simply.text({ title: data.teamname, subtitle: data.people });
  });
*/

navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
 
    var latlong = "Lat: " + coords.latitude + ", long: " + coords.longitude ;
    simply.text({ title: "Current location", subtitle: latlong });
  
});
