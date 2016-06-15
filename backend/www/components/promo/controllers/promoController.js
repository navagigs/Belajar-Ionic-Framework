var promoController = angular.module('icard.promo.controller', []);
promoController.controller('promoViewCtr', ['$scope', '$rootScope',
    function($scope,$rootScope) {
        console.log('promo view controller');
        $rootScope.title = 'Promo List';
        $rootScope.activeMenu = 'Management';
        $rootScope.activeSubMenu = 'Promo';
        $rootScope.headTitle = 'Promo List';
    }
]);
promoController.controller('promoAddCtr', ['$scope',
    function($scope) {
        console.log('promo add controller');
    }
]);
promoController.controller('promoDeleteCtr', ['$scope',
    function($scope) {
        console.log('promo delete controller');
    }
]);
promoController.controller('promoEditCtr', ['$scope',
    function($scope) {
        console.log('promo edit controller');
    }
]);