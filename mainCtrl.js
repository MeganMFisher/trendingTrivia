(function(){
  'use strict'
  angular.module('app').controller('mainCtrl', function($scope, mainSrv){
    var pageNum = 0;
   
    init();

    function init(){
      getQuestions(pageNum)
    }

    function getQuestions(pageNum){
      mainSrv.getQuestions(pageNum).then(function(response){
        console.log(response.data)
        $scope.questions = response.data
      })
    };

    $scope.nextPage = function(){
      pageNum++
      console.log(pageNum)
      getQuestions(pageNum)
    };

    $scope.prevPage = function(){
      if(pageNum > 0) {
        console.log(pageNum)
        pageNum-- 
        getQuestions(pageNum)
      }
    }

    $scope.selectAnswer = function(key, answer){
            if(key == answer) console.log('correct!')
            else console.log('try again :(')
    }

    $scope.chooseColor = function(key, answer){
        if(key == answer) return {background : 'green'}
        else return {background : 'red'}
    }


  })
})(); //IIFE 




















// (function(){
//     'use strict'

// angular.module('app').controller('mainCtrl', function ($scope, mainSvc) {

// // var pageNum = 0;
// // $scope.nextPage = nextPage;
// // $scope.prevPage = prevPage;

//     $scope.getTrivia = function () {
//         var promise = mainSvc.getTrivia($scope.currentPage);
//         promise.then(function (response) {
//             $scope.questions = response;
            
//         })
//     }

//     $scope.getTrivia();


//     // $scope.nextPage = function () {
//     //     pageNum++
//     // }

//     // $scope.prevPage = function () {
//     //     if(pagaNum > 0) pageNum--
//     // }






//     $scope.difficulty = function (question) {
//         if (question === 1) {
//             return 'Easy';
//         } else if (question === 2) {
//             return 'Medium';
//         } else if (question === 3) {
//             return 'Hard';
//         }
//     }

//     $scope.setDifficultyColor = function (question) {
//         if (question === 1) {
//             return {
//                 color: '#59bd75'
//             };
//         } else if (question === 2) {
//             return {
//                 color: '#d5d346'
//             };
//         } else if (question === 3) {
//             return {
//                 color: '#da2d7b'
//             };
//         }
//     }

//     // $scope.setCorrectColor = function(question){
//     //     if(question == ) {
//     //         return {color: 'red'}
//     //     } else {
//     //         return {color: 'green'}
//     //     }
//     // }






// })

// })();