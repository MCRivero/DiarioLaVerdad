angular.module('LaVerdad', ['ui.router', 'JournalServices', 'LaVerdad.controllers'])
	.config(journalRouter);
	
function journalRouter ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/laverdad');
	
	$stateProvider
		.state('laverdad', {url: '/laverdad', templateUrl: 'partials/laverdad.html', controller: 'LaverdadCtrl'})
		.state('laverdadblogs', {url: '/laverdad/blogs', templateUrl: 'partials/blogs.html', controller: 'BlogsCtrl' })
		.state('laverdadbuscar', {url: '/laverdad/buscar/:buscar', templateUrl: 'partials/buscar.html', controller: 'BuscarCtrl' })
		.state('laverdadarticulos.foro', {url: '/laverdad/foro/', templateUrl: 'partials/foro.html', controller: 'ForoCtrl' })
		.state('laverdadarticulos', {url: '/laverdad/noticias/:id', templateUrl: 'partials/noticias.html', controller: 'NoticiasCtrl' });
}