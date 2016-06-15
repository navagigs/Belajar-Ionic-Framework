var transactionController = angular.module('icard.transaction.controller', []);
transactionController.controller('transactionViewCtr', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('transactionViewCtr');
        $rootScope.title = 'Transactions List';
        var vm = $scope;
        $rootScope.activeMenu = 'Transactions';
        $rootScope.activeSubMenu = 'Transactions';
        $rootScope.headTitle = 'Transactions List';
    }
])
transactionController.controller('transactionEditCtr', ['$scope',
    function($scope) {
        console.log('transactionEditCtr');
    }
])
transactionController.controller('transactionDeleteCtr', ['$scope',
    function($scope) {
        console.log('transactionDeleteCtr');
    }
])
transactionController.controller('transactionDetailCtr', ['$scope',
    function($scope) {
        console.log('transactionDetailCtr');
    }
])