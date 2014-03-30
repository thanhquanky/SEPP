var api = "http://unispon.com/hackduke/index.php/sepp/";

navigator.geolocation.getCurrentPosition(function(pos) {
    var coords = pos.coords;
    
    localStorage.setItem('coords', coords);
    //var latlongQuery = "?lat=" + coords.latitude + "&long=" + coords.longitude;
    var lat = coords.latitude;
    var lng = coords.longitute;
    var walkscore_api = "http://unispon.com/hackduke/index.php/sepp/walkscore/?lat=" + lat + "&long=" + lng;
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
      simply.subtitle('Calling emergency!!!');
      var coords = localStorage.get('coords');
      var emergency_message = "I'm in danger situation. My coords is " + coords.latitute + "," + coords.longitude + ". Please call 911 for me";
      var emergency_call_api = api + "call";
      var emergency_text_api = api + "http://unispon.com/hackduke/index.php/sepp/text/?message=" + encodeURIComponent(emergency_message);
      ajax({ url: emergency_text_api, type: 'json' }, function(data) {
          
      });
  }
});
