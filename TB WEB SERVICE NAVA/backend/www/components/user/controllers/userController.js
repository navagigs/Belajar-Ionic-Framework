var userController = angular.module('icard.user.controller', []);
userController.controller('userViewCtr', ['$scope', '$rootScope', 'DTOptionsBuilder',
    function($scope, $rootScope, DTOptionsBuilder) {
        console.log('userViewCtr');
        $rootScope.title = 'User List';
        var vm = $scope;
        $rootScope.activeMenu = 'Management';
        $rootScope.activeSubMenu = 'Users';
        $rootScope.headTitle = 'Users List';
                
    }
]);
userController.controller('userAddCtr', ['$scope',
    function($scope) {
        console.log('userAddCtr');
    }
]);
userController.controller('userEditCtr', ['$scope',
    function($scope) {
        console.log('userEditCtr');
    }
]);
userController.controller('userDeleteCtr', ['$scope',
    function($scope) {
        console.log('userDeleteCtr');
    }
]);
userController.controller('userDetailCtr', ['$scope', '$stateParams', '$rootScope',
    function($scope, $stateParams, $rootScope) {
        var params = $stateParams;
        $rootScope.activeMenu = 'Management';
        $rootScope.activeSubMenu = 'Users';
        $rootScope.headTitle = 'Users List / Detail / ' + params.param;

        $scope.isEdit = false;
        $scope.editting = function(){
            $scope.isEdit = true;
        }

        $scope.cancelEdit = function(){
            $scope.isEdit = false;
        }

        console.log("ID : " + params.param);
        console.log("userDetailCtr");
    }
]);

userController.directive('modalDeleteUser', [function () {
    return {
        templateUrl: 'components/user/modal/userModalDelete.html'
    };
}])