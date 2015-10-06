var mysql = require('mysql');

exports.newslist = function(req, res) {

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''  
});

console.log("req.params.buscar tiene: " + req.params.buscar + "\n");
conn.query('USE periodico');

//var sql = "SELECT * FROM articulos WHERE link_articulo LIKE '%" + req.params.buscar + "%' OR resumen_articulo LIKE '%" + req.params.buscar + "%'"

//console.log("Query sql es: " + sql);



conn.query(
  "SELECT * FROM noticias WHERE texto_noticia LIKE '%" + req.params.buscar + "%' OR titulo_noticia LIKE '%" + req.params.buscar + "%'",  
  function(err, results, fields) {
    if (err) {
      conn.end();
      throw err;
    }
    // res.json(results);
	
	var listObject = {};
	
	for (var i = 0; i < results.length; i++){
	
		listObject[i] = results[i];
	};
	
	res.json(listObject);
	
	//console.log(results.length + " noticias enviadas /n");
	
	//console.log(results);
	
});

conn.end();

};

exports.bloglist = function(req, res) {

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''  
});

conn.query('USE periodico');

conn.query(
  'SELECT * FROM blogs ',  
  function(err, results, fields) {
    if (err) {
      conn.end();
      throw err;
    }
    res.json(results);
	
	/* var listObject = {};
	
	for (var i = 0; i < results.length; i++){
	
		listObject[i] = results[i];
	};
	
	res.json(listObject);
	
	//console.log(results.length + " blogs enviados /n");
	
	//console.log(results); */
	
});

conn.end();

};
	     
exports.noticias = function(req, res) {

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''  
});

conn.query('USE periodico');

conn.query(
  'SELECT * FROM noticias WHERE id = ' + req.params.id,  
  function(err, results, fields) {
    if (err) {
      conn.end();
      throw err;
    }
    // res.json(results);
	
	var listObject = {};
	
	for (var i = 0; i < results.length; i++){
	
		listObject[i] = results[i];
	};
	
	res.json(listObject);
	
	console.log(results.length + " noticias enviadas /n");
	
	console.log(results);
	
});

conn.end();

};

exports.comentarios = function(req, res) {

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''  
});

conn.query('USE periodico');

console.log(req.body.noticiaid, req.body.usuario, req.body.texto);

var noticiaid = req.body.noticiaid; 

var usuario =  req.body.usuario;

var texto = req.body.texto;

conn.beginTransaction(function(err){

	if (err) { throw err; }
	
	console.log ( "INSERT INTO comentarios_noticias (username, texto) VALUES ( " + usuario + "," + texto + ")" );
	
	conn.query( "INSERT INTO comentarios_noticias (username, texto) VALUES ( '" + usuario + "','" + texto + "')", 
		
		function(err, result){
		
			if (err) {
			
			    console.log("Error primer insert");
				
				conn.rollback( function(){;
					throw err;
				});
			}
			
			console.log("Primer insert exitoso");
			
			
			var last_id = result.insertId;
			
			console.log("Valor de last_id", last_id);
			
			console.log("Segundo query es: ", "INSERT INTO notcom (n_id, c_id) VALUES ( " + req.body.noticiaid + "," + last_id + ")");
			
			conn.query("INSERT INTO notcom (n_id, c_id) VALUES ( " + req.body.noticiaid + "," + last_id + ")", 
				
				function(err, result){
			
					if (err) {
					
					    console.log("Error segundo insert");
						
						conn.rollback( function(){
							throw err;
						});
					}
					
					console.log("Segundo insert exitoso");
					
					conn.commit(function(err){ 
					
						if (err) {
							conn.rollback( function(){
								throw err;
							});
						}
					
						console.log('success!');
						
						conn.end();
					});
					
				});
				
		});
		

//conn.end();

});

}