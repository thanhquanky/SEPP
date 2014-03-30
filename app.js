/*

*/

navigator.geolocation.getCurrentPosition(function(pos) {
    var coords = pos.coords;
    //var latlongQuery = "?lat=" + coords.latitude + "&long=" + coords.longitude;
    var lat = coords.latitude;
    var long = coords.longiute;
    var testUrl = "http://unispon.com/hackduke/index.php/welcome/walkscore/?lat=" + lat + "&long=" + long;
    ajax({ url: testUrl, type: 'json' }, function(data) {
        simply.text({ title: "Walkscore" + data.walkscore , subtitle: data.message });
    });
    

  
});
