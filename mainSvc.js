(function(){
  'use strict'
  angular.module('app').service('mainSrv', function($http){

    var baseUrl = 'https://practiceapi.devmountain.com/'

    this.getQuestions = function(pageNum){
      return $http.get(baseUrl + '/api/trivia/questions/?page=' + pageNum)
    }



  })
})();





















// (function(){
//     'use strict'

// angular.module('app').service('mainSvc', function ($http) {

//     var baseUrl = "https://practiceapi.devmountain.com/api/trivia/questions/";


//     this.getTrivia = function() {
//     return $http({
//       method: 'GET',
//       url: baseUrl 
//     }).then(function(response){
//         if(response.status === 200){
//             console.log(response.data);
//             return response.data;
//         } else {
//             return "Error";
//         }
//     })
//   }

// })

// })();