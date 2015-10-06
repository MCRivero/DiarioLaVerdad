var express = require('express');

var bodyParser = require('body-parser');

var multer = require('multer');

var app = express()	
	.use(express.static('public'));

var routes = require('./routes1');

app.disable('etag');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());


app.get('/laverdad/buscar/:buscar', routes.newslist);
app.get('/laverdad/noticias/:id', routes.noticias);
app.get('/blogs', routes.bloglist);
app.post('/comentarios', routes.comentarios);


//app.post('/comentarios', function(req, res){
//	console.log(req.body.usuario, req.body.texto, req.body.noticiaid);
//	res.json(req.body);
//});

app.get('*', function(req, res) {
  
      res.send('Bad Route');
      
});

var server = app.listen(3000, function() {
  
      console.log('Listening on port 3000');
      
});
      
      
