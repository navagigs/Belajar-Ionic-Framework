angular.module('starter.services', [])

.factory('temanService', function($http) {
    var baseUrl = 'http://localhost:8080/ws_tb/';
    return {
        getAll: function() {
            return $http.get(baseUrl+'select.php');
        },
        getId: function (temanId){
            return $http.get(baseUrl+'select_id.php?id='+temanId); 
        },
        create: function (datateman){
            return $http.post(baseUrl+'insert.php',datateman,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        update: function (datateman){
            return $http.post(baseUrl+'update.php',datateman,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        delete: function  (id){
            return $http.get(baseUrl+'delete.php?id='+id);
        }
    };
    
});
