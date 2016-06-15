var memberController = angular.module('icard.member.controller', []);
memberController.controller('memberViewCtr', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        console.log('member view controller');
        $rootScope.title = 'Members List';
        $rootScope.activeMenu = 'Management';
        $rootScope.activeSubMenu = 'Members';
        $rootScope.headTitle = 'Members List';
    }
]);
memberController.controller('memberAddCtr', ['$scope',
    function($scope) {
        console.log('member add controller');
    }
]);
memberController.controller('memberDeleteCtr', ['$scope',
    function($scope) {
        console.log('member delete controller');
    }
]);
memberController.controller('memberEditCtr', ['$scope',
    function($scope) {
        console.log('member edit controller');
    }
]);