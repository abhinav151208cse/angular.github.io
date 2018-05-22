var app=angular.module("myModule",[])
               .controller("myController",function($scope){
           	var countries=[
           	{
           		name: "UK",
              cities:[{name: "London"},{name:"Manchester"},{name:"Lucknow"}]
            },
            {
           		name: "UKK",
              cities:[{name: "London"},{name:"Manchester"},{name:"Lucknow"}]
            },
            {
           		name: "UKKk",
              cities:[{name: "London"},{name:"Manchester"},{name:"Lucknow"}]
            }   

          ];
           $scope.countries=countries; 
           }); 