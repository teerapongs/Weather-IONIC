angular.module('weather').factory('weatherApi', ['$http', '$q', WeatherApi]);

function WeatherApi($http, $q) {
    function getWeather(lat, longi) {
        var deferred = $q.defer();
        $http.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text=%22"+lat+","+longi+"%22%20and%20gflags=%22R%22")
            .success(function(data) {
                deferred.resolve(data);
                return data;
            })
            .error(function() {
                console.log("Error")
                deferred.reject();
            });
        return deferred.promise;
    }
    return {
        getWeather: getWeather
    };
}
