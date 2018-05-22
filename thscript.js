 var app=angular
            .module("myModule",[])
            .controller("myController",function($scope){
            	var employees=[
                    { firstname:"Ben" ,lastname:"hasting",gender:"MAle", salary:5000},
                    { firstname:"Ben" ,lastname:"Singh",gender:"MAle", salary:5400},
                    { firstname:"Ben" ,lastname:"Sri",gender:"MAle", salary:5300},
                    { firstname:"Ben" ,lastname:"Abcd",gender:"MAle", salary:5100},
                    { firstname:"Ben" ,lastname:"nana",gender:"MAle", salary:5500},
            	]
            });