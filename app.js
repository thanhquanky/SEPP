var testUrl = "http://unispon.com/hackduke/test.php?test=Thanh&test2=Quan";
ajax({ url: testUrl, type: 'json' }, function(data) {
    simply.text({ title: data.teamname, subtitle: data.people });
  });
