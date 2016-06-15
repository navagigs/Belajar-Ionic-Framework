var cardController = angular.module('icard.card.controller', []);
cardController.controller('cardViewCtr', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('card view controller');
        $rootScope.title = 'Cards List';
        $rootScope.activeMenu = 'Management';
        $rootScope.activeSubMenu = 'Cards';
        $rootScope.headTitle = 'Cards List';
    }
]);
cardController.controller('cardAddCtr', ['$scope',
    function($scope) {
        console.log('card add controller');
    }
]);
cardController.controller('cardDeleteCtr', ['$scope',
    function($scope) {
        console.log('card delete controller');
    }
]);
cardController.controller('cardEditCtr', ['$scope',
    function($scope) {
        console.log('card edit controller');
    }
]);