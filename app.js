/*

*/

navigator.geolocation.getCurrentPosition(function(pos) {
    var coords = pos.coords;
    var latlongQuery = "?lat=" + coords.latitude + "&long=" + coords.longitude;
    var testUrl = "http://unispon.com/hackduke/index.php/welcome/walkscore/" + latlongQuery;
    ajax({ url: testUrl, type: 'json' }, function(data) {
        simply.text({ title: "Walkscore" + data.walkscore , subtitle: data.message });
    });
    
  
});
