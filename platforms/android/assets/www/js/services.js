angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory("Noticias", function($http) {
   return $http.get('http://politico.agencia128bits.com/api-noticia/?format=json')
})
.factory("Propostas", function($http) {
   return $http.get('http://politico.agencia128bits.com/api-proposta/?format=json')
})
.factory("Albuns", function($http) {
   return $http.get('http://politico.agencia128bits.com/api-foto/?format=json')
})
.factory("Videos", function($http) {
   return $http.get('http://politico.agencia128bits.com/api-video/?format=json')
});
