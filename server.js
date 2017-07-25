const express = require('express');
const mustache = require('mustache-express');

const app = express();

app.get('/', function(req, res) {
  res.send('Put cool template stuff here instead.');
});


app.listen(7858, function() {
  console.log('Listening at port 7858.');
});
