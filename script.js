var myApp=angular.module("myModule",[])
myApp.controller("myController",function  ($scope) {
	var employee={
		firstname:"Daavid",
		lastname: "singh",
		gender:"male"
	};

	$scope.employee=employee;
	// body...
}) 