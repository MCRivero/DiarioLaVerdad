angular.module('JournalServices', ['ngResource'])
	.factory('Search', function($resource){
		return $resource('/laverdad/buscar/:buscar');
	})
	.factory('Blogs', function($resource){
		return $resource('/blogs');
	})
	.factory('Foro', function($resource){
		return $resource('/laverdad/cargacomentarios/:id');
	})
	.factory('Noticias', function($resource){
		return $resource('/laverdad/noticias/:id');
	})
	.factory('Comentario', function($resource){
		return $resource('/comentarios');
	});