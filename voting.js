var app=angular.module("myModule",[])
               .controller("myController",function($scope){
                 var technologies=[
                  {name:"Swift" ,likes: 0,dislikes: 0},
                  {name:"ZEN" ,likes: 0,dislikes: 0},
                  {name:"ALto" ,likes: 0,dislikes: 0},
                  {name:"Scorpio" ,likes: 0,dislikes: 0},

                 ];

                $scope.technologies=technologies;
                $scope.incrementLikes=function(technology){
                	technology.likes++;
                };
                $scope.incrementDislikes=function(technology){
                	technology.dislikes++;
                };



              });