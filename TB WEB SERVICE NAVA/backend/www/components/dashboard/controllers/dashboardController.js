var dashboardController = angular.module('icard.dashboard.controller', []);

dashboardController.controller('dashboardViewCtr', ['$scope','$rootScope', function ($scope, $rootScope) {
	console.log("dashboardViewCtr");
	$rootScope.title = 'Dashboard';
        var vm = $scope;
        $rootScope.activeMenu = 'Dashboard';
        $rootScope.activeSubMenu = 'Dashboard';
        $rootScope.headTitle = 'Dashboard List';
}]);