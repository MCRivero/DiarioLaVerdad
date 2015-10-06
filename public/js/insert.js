$query = "INSERT INTO comentarios_noticias VALUES ('data.usuario', 'pseudonimo', 'data.texto')";
$mysqli->query($query);


$query = "INSERT INTO artcom VALUES (a_id*, c_id*)";
$mysqli->query($query);




CREATE TABLE artcom (  id int(11) NOT NULL AUTO_INCREMENT,  
a_id int(11) DEFAULT NULL,  c_id int(11) DEFAULT NULL,  
PRIMARY KEY (id),  KEY a_id (a_id),  KEY c_id (c_id),  
CONSTRAINT artcom_ibfk_1 FOREIGN KEY (a_id) REFERENCES articulos (id),  
CONSTRAINT artcom_ibfk_2 FOREIGN KEY (c_id) REFERENCES comentarios_noticias (id))
 ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8