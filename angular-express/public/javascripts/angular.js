/**
 * Created by lenovo on 2015/4/17.
 */
var hellomodule = angular.module('HelloAngular',[]);
hellomodule.controller('helloNgCtrl',['$scope',function($scope){
    $scope.greeting={
        text:'hello'
    };
}]);