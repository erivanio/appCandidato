angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('AlbunsCtrl', function($scope, Albuns) {
  	Albuns.success(function(data) {
        $scope.albuns = data;
    });
})

.controller('FotosCtrl', function($scope, $stateParams, Albuns) {
	Albuns.success(function(data){
        angular.forEach(data, function(album) {
            if (album.id == $stateParams.albumId)
                $scope.fotos = album.fotos;
        });
    });
})

.controller('VideosCtrl', function($scope, Videos) {
	Videos.success(function(data) {
        $scope.videos = data;
    });
})

.controller('AgendaCtrl', function($scope, Agenda) {
	Agenda.success(function(data) {
        $scope.agenda = data;
    });
})

.controller('ContatoCtrl',function($scope, $http, $window) {
    $scope.submit = function(form) {
        $http({
            method: 'POST',
            url: 'http://politico.agencia128bits.com/api-contatos/',
            data: form
        }).success(function(data, status) {
            $window.location.href = '#/tab/dash';
            console.log("OK" , data, status)
        }).error(function(data, status) {
               console.log("ERR", data, status)
        });
    }

})

.controller('NoticiaCtrl', function($scope, Noticias) {
  	Noticias.success(function(resultNoticia) {
        $scope.noticias = resultNoticia;
    });
})

.controller('NoticiaInternaCtrl', function($scope, $stateParams, Noticias) {
	Noticias.success(function(resultNoticia){
        angular.forEach(resultNoticia, function(noticia) {
            if (noticia.id == $stateParams.noticiaId)
                $scope.noticia = noticia;
        });
    });
})

.controller('PropostaCtrl', function($scope, Propostas) {
  	Propostas.success(function(resultProposta) {
        $scope.propostas = resultProposta;
    });
})

.controller('PropostaInternaCtrl', function($scope, $stateParams, Propostas) {
	Propostas.success(function(resultProposta){
        angular.forEach(resultProposta, function(proposta) {
            if (proposta.id == $stateParams.propostaId)
                $scope.proposta = proposta;
        });
    });
});