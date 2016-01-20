angular.module('weather').controller('WeatherCtrl', ['$stateParams', 'weatherApi', 'locationApi', WeatherCtrl]);

function WeatherCtrl($stateParams, weatherApi, locationApi) {
    var vm = this;
    console.log($stateParams)
    weatherApi.getWeather($stateParams.lat, $stateParams.longi).then(function(data) {
        var x2js = new X2JS();
        var json = x2js.xml_str2json(data);
        console.log(json.query.results.Result);
        vm.weather = json.query.results.Result;
        console.log(vm.weather.woeid);
        locationApi.getWoeid(vm.weather.woeid).then(function(data) {
            var x2js = new X2JS();
            var json = x2js.xml_str2json(data);
            console.log(json);
            vm.woeid = json.channel;
        });
    });
}
