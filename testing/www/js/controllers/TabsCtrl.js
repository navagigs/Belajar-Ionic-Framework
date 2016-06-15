
app.controller('TabsCtrl', function ($scope,$ stateParams, $state, kelasService, dosenService, $timeout, $ionicLoading) {
	$scope.showData = function () {
		kelasService.getAll().success(function (data) {
			$scope.kelas = data;

			$timeout(function () {
				$ionicLoading.hide();
				$scope.kelas = data;
			}, 300);

		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.reload = function () {
		$state.go('app.home');
	};

	$scope.showData = function () {
			dosenService.getAll().success(function (datads) {
				$scope.dosen = datads;

				$timeout(function () {
					$ionicLoading.hide();
					$scope.dosen = datads;
				}, 300);

			}).finally(function () {
				$scope.$broadcast('scroll.refreshComplete');
			});
		};
		$scope.showData();

		$scope.reload = function () {
			$state.go('app.tabs');
		};

	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 100,
		showDelay: 0
	});
})
