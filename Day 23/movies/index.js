var express = require('express');
var bodyParser = require('body-parser');

var moviesController = require('../controllers/movies_controller');

var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next){
  console.log("This sentence is logged every single time")
  
})

app.get('/movies', moviesController.index);
app.get('/movies/:id', moviesController.show);
app.get('/movies', moviesController.create);
app.get('/movies/:id', moviesController.update);
app.get('/movies/:id', moviesController.destroy);

app.get('/movies', function(req, res, next){
  res.status(200).json({hello: 'world'});
});

app.listen(3000, function(){
  console.log('It is running');
});
