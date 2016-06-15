var app = angular.module('App.services', [])

app.factory('kelasService', function ($http) {
	var baseUrl = 'http://localhost:8080/backend_ws/index.php/restfull/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'get_all_kelas');
		},
	};

})

app.factory('dosenService', function ($http) {
	var baseUrl = 'http://localhost:8080/backend_ws/index.php/restfull/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'get_all_dosen');
		},
	};

})

app.factory('mahasiswaService', function ($http) {
	var baseUrl = 'http://localhost:8080/backend_ws/index.php/restfull/';
	return {
		getAll: function () {
			return $http.get(baseUrl + 'get_all_mhs');
		},
		getIdkelas: function (kelasId) {
			return $http.get(baseUrl + 'get_id_kelas?kelas_id=' + kelasId);
		},
		getIdmahasiswa: function (mahasiswaId) {
			return $http.get(baseUrl + 'get_mhs/?mahasiswa_id=' +  mahasiswaId);
		},
        addMhs: function (data){
            return $http.post(baseUrl + 'insert_mhs.php',data,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        update: function (data){
            return $http.post(baseUrl+'update.php',data,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        delete: function  (mahasiswa_id){
            return $http.get(baseUrl+'delete_mhs.php?mahasiswa_id='+mahasiswa_id);
        }
	};

})

app.factory('loginService', function ($http) {
	return {
		login: function (login) {
			return $http.get("http://localhost:8080/tbwebservice/server/login/login.php?user=" + login.username + "&pass=" + login.password + "");
		}
	};
});