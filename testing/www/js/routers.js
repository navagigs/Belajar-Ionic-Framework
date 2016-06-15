var app = angular.module('App.routers', [])

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'views/partials/menu.html',
		controller: 'AppCtrl'
	})

	.state('login', {
		url: '/login',
		templateUrl: 'views/pages/login.html',
		controller: 'LoginCtrl'
	})
	.state('app.home', {
		url: '/home',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/home.html',
				controller: 'HomeCtrl'
			}
		}
	})

	.state('app.list_mahasiswa', {
		url: '/list_mahasiswa',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/list_mahasiswa.html',
				controller: 'ListmahasiswaCtrl'
			}
		}
	})

	.state('app.mahasiswa', {
		url: '/mahasiswa/:kelasId',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/mahasiswa.html',
				controller: 'mahasiswaCtrl'
			}
		}
	})

	.state('app.detail_mhs', {
		url: '/mahasiswa/detail_mhs/:mahasiswaId',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/detail_mahasiswa.html',
				controller: 'DetailMahasiswaCtrl'
			}
		}
	})


	.state('app.add_mahasiswa', {
		url: '/add_mahasiswa',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/add_mahasiswa.html',
				controller: 'addMahasiswaCtrl'
			}
		}
	})


	.state('app.list_dosen', {
		url: '/list_dosen',
		views: {
			'menuContent': {
				templateUrl: 'views/pages/list_dosen.html',
				controller: 'ListdosenCtrl'
			}
		}
	})

	$urlRouterProvider.otherwise('/login');
});