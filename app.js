var url = "http://unispoon.com/hackduke/test.php";
ajax({ url: url, type: 'json' }, function(data) {
    simply.text({ title: data.teamname, subtitle: data.people });
  });
