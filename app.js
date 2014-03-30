var testUrl = "http://unispon.com/hackduke/test.php";
ajax({ url: testUrl, type: 'json' }, function(data) {
    simply.text({ title: data.teamname, subtitle: data.people });
  });
