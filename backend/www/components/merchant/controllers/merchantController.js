var merchantController = angular.module('icard.merchant.controller', []);
merchantController.controller('merchantViewCtr', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('ini fungsi view merchant');
        $rootScope.title = 'Merchants List';
        $rootScope.activeMenu = 'Management';
        $rootScope.activeSubMenu = 'Merchants';
        $rootScope.headTitle = 'Merchants List';
    }
]);
merchantController.controller('merchantAddCtr', ['$scope',
    function($scope) {
        console.log('ini fungsi add merchant');
    }
]);
merchantController.controller('merchantDeleteCtr', ['$scope',
    function($scope) {
        console.log('ini fungsi delete merchant');
    }
]);
merchantController.controller('merchantEditCtr', ['$scope',
    function($scope) {
        console.log('ini fungsi edit merchant');
    }
]);
merchantController.directive('merchantModal', [
    function() {
        return {
            templateUrl: 'components/merchant/modal/merchantModalDetail.html'
        };
    }
])