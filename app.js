/*

*/

navigator.geolocation.getCurrentPosition(function(pos) {
    var coords = pos.coords;
    var latlongQuery = "?lat="coords.latitude + ",long=" + coords.longitude;
    var testUrl = "http://unispon.com/hackduke/index.php/walkscore/" + latlongQuery;
    ajax({ url: testUrl, type: 'json' }, function(data) {
        simply.text({ title: "Walkscore" , subtitle: data.walkscore });
    });
    
  
});
