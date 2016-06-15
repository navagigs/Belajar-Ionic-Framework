var merchantServices = angular.module('icard.merchant.services', []);

merchantServices.factory('merchantServices', [function () {
	
	return {
		test: function(){
			console.log('test fungsi merchant service');
		}
	};
}])