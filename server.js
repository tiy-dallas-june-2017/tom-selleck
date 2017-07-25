const express = require('express');
const mustache = require('mustache-express');

const app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  //res.send('Put cool template stuff here instead.');

  let me = {
    firstName: 'Nikki',
    hairColor: 'Blond'
  };

  res.render('index', me);
});


app.listen(7858, function() {
  console.log('Listening at port 7858.');
});
