angular.module('LaVerdad.controllers', [])
	.controller('ForoCtrl', function($scope, $stateParams, Foro){
	
		$scope.comentariosForo = Foro.get({ id: $stateParams.id });
	
	}).controller('LaverdadCtrl', function($scope, Blogs, $location){
	
		$scope.loadArticles = function() {
		
			$location.path('/laverdad/buscar/' +  $scope.buscar);
		};
		
		$scope.blogs = Blogs.query();
		$scope.buscar = ''; 
		$scope.comments = 'Comments()';		
	
	}).controller('BuscarCtrl', function($scope, $stateParams, Search, $sce){
		
			if ($scope.buscar){
	
					$scope.contenidos = Search.get({
					buscar: $stateParams.buscar
				
				});
		
			};
		
			console.log("contenidos tiene " + $scope.contenidos.length + " celdas ");
				
			$scope.seguroHtml = $sce.trustAsHtml;
				
	}).controller('NoticiasCtrl', function($scope, $stateParams, Noticias, $sce, Comentario){
					
				$scope.salvarComentario = function () {
					
					Comentario.save( $scope.data, function(){ 
						console.log('Salvando comentario' + ' texto = ' + $scope.data.texto + ' usuario = ' + $scope.data.usuario + ' noticia id = ' + $scope.data.noticiaid );
					});
				}
				
				
				$scope.contenidos = Noticias.get({ id: $stateParams.id });
				
				$scope.seguroHtml = $sce.trustAsHtml;
				$scope.data = {};
				$scope.data.texto = "";
				$scope.data.usuario = "mcriverop";
				$scope.data.noticiaid = $stateParams.id;
				
						
	}).controller('BlogsCtrl', function($scope){
	
			$scope.autor1 = "Robert Kuttner";
			$scope.autor2 = "Tracy Morgan";
			$scope.autor = "Peggy Dresler";
			$scope.presentacion = "Author research psychologist and gender scholar";
			$scope.titulo = "Man 2020";
			$scope.contenido = [
										{ p: "Change for women over the last decade is in the books. Roles have transformed.\
			Opportunities have exploded. And a future of choice and empowerment is locked in.\
			For men, that future is a lot less certain." },
										{ p: "A time of female transformation has been a time of male accommodation.\
			The adjustment to a massive transfer of power remains a work in progress and, judging by surveys and headlines,\
			the progress is painfully uneven.\
			Where is the accommodation and adjustment taking the world of men? If the old model of\
			masculinity has outlived its shelf life, what will the new one look like?" },
										{ p: "The husband of a long-time friend is groping for an answer. Like a lot of others, he recently \
			found himself out of a job he assumed he would have as long as he wanted it. He's bitter. But \
			more than that, he\'s confused. \"it\'s not just being out of a job,\" he said. \"That happens. \
			You move on, and you find another one\"But -- in a burst of self examination unusual for a \
			hard-nosed former rugby player -- he said: \"I feel like I'm competing in a whole different \
			place. Some of the very best parts of who I am don't seem to fit." },
										{ p: "Knowing him for the effective sometimes abrasive take-charge guy that he is, I thought to\
			myself: \"You might be on to something.\" Until the last recent sliver of recorded history: Men were men, women were women, and biology \
			was destiny.\
			Knowing him for the effective sometimes abrasive take-charge guy that he is, I thought to myself: \
			\"You might be on to something.\" Until the last recent sliver of recorded history: Men were men, women were women, and biology \
			was destiny." },
										{ p: "But the strength that it took to build walls, forge steel and fight wars has lost its power to\
			define possibility. The division between men\'s work and women\'s work is now simply a matter of\
			choice. In all but a very few precincts of work and life, there is no intrinsic value in being \
			male.\
			As men wander through this often painful period of reassessment of who and what they are in the \
			world, the future holds some possible choices." },
										{ p: "One argument is that gender difference is so genetically ingrained that we will, over time, \
			revert to a semblance of traditional roles. This period of adjustment will end, and men will be \
			men -- perhaps with some excess of testosterone bled from the tank. (There is also hope in some \
			quarters that lower feminist-liberal birth rates and higher traditional-conservative birth rates \
			will one day restore men to the throne.)" },
										{ p: "Another, recently popular, take is that men are old news. Their role -- their very usefulness in \
			a developed society -- has been usurped to the point they will never again be men as we know \
			them. They will be androgynous followers of a new and superior model of female leadership. As \
			James Wolcott put it in a Vanity Fair article: American men are \" in a prolonged batting slump.\" \
			Somewhere in between is the hope that we will grow into a society where gender expectation is \
			fluid and multidimensional. A sense of place and roles will be as diverse as the humans who \
			measure their worth against them. We might even revert to an earlier-times gender community, \
			where it took both men and women working together to bring in the crops." },
										{ p: "If we want a peek at men by the end of the decade, we might start with those who will about then, \
			be hitting their prime -- the 80 million or so Millennials. \
			Some of the signs bode well. In the same way they are called the first generation of digital \
			natives, they are also the first generation of gender natives. Gender equality was taught early \
			and reinforced continuously in all aspects of their lives. \
			For them working with -- and for women -- is no more remarkable than getting an email.They are \
			also much more likely to take a greater share of household responsibility. They support the \
			ambitions of working wives and are -- generally -- comfortable with those wives earning as much \
			or more than they do. \
			Research also indicates Millennial men are more family-oriented than earlier generations of \
			fathers who prowled the perimeters of family life -- not to be bothered when he's reading the \
			paper." }
										
								];
	
	
	});

