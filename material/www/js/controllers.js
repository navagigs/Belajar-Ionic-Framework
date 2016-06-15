var app = angular.module('App.controllers', [])

app.controller('AppCtrl', function ($scope) {
	$scope.title = "D4-Teknik Informatika 2014";
})

app.controller('LoginCtrl', function ($scope, $state, loginService, $ionicPopup) {
	$scope.title = "Login";
	
    $scope.login = function () {
        loginService.login($scope.login).then(function (data) {
            if (Object.keys(data.data).length === 1) {
                $state.go('app.home');
            } else {
                $ionicPopup.alert({
                    title: "Information",
                    template: "Username atau Password salah",
                    okText: 'Ok',
                    okType: 'button-balanced'
                });
            }
        });
    };
})


app.controller('HomeCtrl', function ($scope, $state, kelasService, dosenService, $timeout, $ionicLoading) {
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
			$state.go('app.home');
		};

	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 100,
		showDelay: 0
	});
})

app.controller('ListmahasiswaCtrl', function ($scope, $state, mahasiswaService, $timeout, $ionicLoading) {
		
	$scope.title = "D4-Teknik Informatika 2014";
		$scope.showData = function () {
		mahasiswaService.getAll().success(function (data) {
			$scope.mahasiswa = data;	
			$scope.entryLimit = "2";


			$timeout(function () {
				$ionicLoading.hide();
				$scope.mahasiswa = data;
			}, 300);


			$scope.limit1 = "1";
			$scope.currentPage = 1; //current page
			$scope.entryLimit = "4"; //max no of items to display in a page
			$scope.filteredItems = $scope.mahasiswa.length; //Initially for no filter  
			$scope.totalItems = $scope.mahasiswa.length;
			$scope.search = {};
			$scope.search.searchText = '';

		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.reload = function () {
		$state.go('app.list_mahasiswa');
	};
	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 100,
		showDelay: 0
	});
})

app.controller('mahasiswaCtrl', function ($scope, $stateParams, $timeout, mahasiswaService, $timeout, $ionicLoading) {
	$scope.title = "mahasiswa";

	$scope.showDataId = function () {
		mahasiswaService.getIdkelas($stateParams.kelasId).success(function (data) {
			$scope.mahasiswa = data;
			$scope.limit1 = "1";
			$scope.currentPage = 1; //current page
			$scope.entryLimit = "4"; //max no of items to display in a page
			$scope.filteredItems = $scope.mahasiswa.length; //Initially for no filter  
			$scope.totalItems = $scope.mahasiswa.length;
			$scope.search = {};
			$scope.search.searchText = '';

			$timeout(function () {
				$ionicLoading.hide();
				$scope.mahasiswa = data;
			}, 300);

		});
	};
	$scope.showDataId();

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	$scope.filter = function () {
		$timeout(function () {
			$scope.filteredItems = $scope.filtered.length;
		}, 10);
	};
	$scope.predicate = 'mahasiswa_nama';
	$scope.reverse = true;
	$scope.order = function (predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
		$scope.predicate = predicate;
	};

	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 100,
		showDelay: 0
	});
})

app.controller('DetailMahasiswaCtrl', function ($scope, $stateParams, $timeout, mahasiswaService, $timeout, $ionicLoading) {
	$scope.title = "Detail Mahasiswa";
 
 	$scope.delete = function (data){
        mahasiswaService.delete(data.mahasiswa_id);
        $scope.datatemans.splice($scope.datatemans.indexOf(data),1);
    };

	$scope.showDataId = function () {
		mahasiswaService.getIdmahasiswa($stateParams.mahasiswaId).success(function (data) {
			$scope.mahasiswa = data;
			$scope.limit1 = "1";
			$scope.currentPage = 1; //current page
			$scope.entryLimit = "4"; //max no of items to display in a page
			$scope.filteredItems = $scope.mahasiswa.length; //Initially for no filter  
			$scope.totalItems = $scope.mahasiswa.length;
			$scope.search = {};
			$scope.search.searchText = '';

			$timeout(function () {
				$ionicLoading.hide();
				$scope.mahasiswa = data;
			}, 300);

		});
	};
	$scope.showDataId();

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};
	$scope.filter = function () {
		$timeout(function () {
			$scope.filteredItems = $scope.filtered.length;
		}, 10);
	};
	$scope.predicate = 'mahasiswa_nama';
	$scope.reverse = true;
	$scope.order = function (predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
		$scope.predicate = predicate;
	};

	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 100,
		showDelay: 0
	});
})



.controller('addMahasiswaCtrl', function($scope,$ionicPopup,mahasiswaService){
    $scope.showAlert = function(msg) {
      $ionicPopup.alert({
          title: msg.title,
          template: msg.message,
          okText: 'Ok',
          okType: 'button-positive'
      });
    };
    
    $scope.data={};
    $scope.simpan = function (){
        if (!$scope.data.mahasiswa_npm){
            $scope.showAlert({
                title: "Information",
                message: "NPM mohon diisi"
            });
        }else if (!$scope.data.mahasiswa_nama){
            $scope.showAlert({
                title: "Information",
                message: "Nama mohon diisi"
            });
        }else if (!$scope.data.mahasiswa_alamat){
            $scope.showAlert({
                title: "Information",
                message: "Alamat mohon diisi"
            });
        }else if (!$scope.data.mahasiswa_email){
            $scope.showAlert({
                title: "Information",
                message: "E-mail mohon diisi"
            });
        }else if (!$scope.data.mahasiswa_tlp){
            $scope.showAlert({
                title: "Information",
                message: "No.Telpon mohon diisi"
            });
        }else if (!$scope.data.mahasiswa_agama){
            $scope.showAlert({
                title: "Information",
                message: "Agama mohon diisi"
            });
        }else if (!$scope.data.kelas_id){
            $scope.showAlert({
                title: "Information",
                message: "Kelas mohon diisi"
            });
        }else{
            mahasiswaService.addMhs({
                mahasiswa_npm: $scope.data.mahasiswa_npm,
                mahasiswa_nama: $scope.data.mahasiswa_nama,
                mahasiswa_alamat: $scope.data.mahasiswa_alamat,
                mahasiswa_email: $scope.data.mahasiswa_email,
                mahasiswa_tlp: $scope.data.mahasiswa_tlp,
                mahasiswa_agama: $scope.data.mahasiswa_agama,
                kelas_id: $scope.data.kelas_id
            }).success(function(data){
                $scope.showAlert({
                    title: "Information",
                    message: "Data Telah Tersimpan"
                });
            });
        }
        
    };
       
});


app.controller('ListdosenCtrl', function ($scope, $state, dosenService, $timeout, $ionicLoading) {
	$scope.title = "D4-Teknik Informatika 2014";
		$scope.showData = function () {
		dosenService.getAll().success(function (data) {
			$scope.dosen = data;	
			$scope.entryLimit = "2";


			$timeout(function () {
				$ionicLoading.hide();
				$scope.dosen = data;
			}, 300);


			$scope.limit1 = "1";
			$scope.currentPage = 1; //current page
			$scope.entryLimit = "4"; //max no of items to display in a page
			$scope.filteredItems = $scope.dosen.length; //Initially for no filter  
			$scope.totalItems = $scope.dosen.length;
			$scope.search = {};
			$scope.search.searchText = '';

		}).finally(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
	$scope.showData();

	$scope.reload = function () {
		$state.go('app.list_dosen');
	};

	$ionicLoading.show({
		content: 'Loading',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 100,
		showDelay: 0
	});
})
