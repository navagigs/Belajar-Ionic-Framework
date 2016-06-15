var userService = angular.module('icard.user.service', []);
userService.factory('userFactory', [function () {

	return {
		userTest: function(){
			console.log('this is user factory');
		}
	};
}])