/*

*/

navigator.geolocation.getCurrentPosition(function(pos) {
    var coords = pos.coords;
    //var latlongQuery = "?lat=" + coords.latitude + "&long=" + coords.longitude;
    var lat = coords.latitude;
    var long = coords.longiute;
    var testUrl = "http://unispon.com/hackduke/index.php/sepp/walkscore/?lat=" + lat + "&long=" + long;
    ajax({ url: testUrl, type: 'json' }, function(data) {
        simply.text({ title: "Walkscore:" + data.walkscore , subtitle: data.message });
        if (data.workscore > 50) {
            simply.vibe('short');
        }
        else if (data.walkscore > 30) {
            simply.vibe('long');
        }
        else {
            simply.vibe('long');
            simply.vibe('long');
            simply.vibe('long');
        }
    });
    

  
});

var count = 0;

simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    count++;
  } else if (e.button === 'select') {
    count = 0;
  }
  if (count > 2) {
    simply.subtitle((5-count) + ' times left');
  }
  if (count >= 5) {
      count = 0;
      var emergency_api = "http://unispon.com/hackduke/index.php/sepp/call";
      ajax({ url: emergency_api, type: 'json' }, function(data) {
          simply.subtitle('Calling emergency!!!');
      });
  }
});
