angular.module('weather').factory('locationApi', ['$http', '$q', LocationApi]);
function LocationApi($http, $q) {
    function getWoeid(woeid) {
        var deferred = $q.defer();
        response.addHeader("Access-Control-Allow-Origin: http://weather.yahooapis.com/forecastrss?w=12756339&u=c");
        $http.get("http://weather.yahooapis.com/forecastrss?w=12756339&u=c")

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
        getWoeid: getWoeid
    };
}
