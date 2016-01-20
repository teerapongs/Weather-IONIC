angular.module('weather').controller('LocationCtrl', ['$scope','$state','weatherApi', List]);

function List($scope, $state) {
	$scope.onClicked = function(latitude, longitude){
		$state.go('weather', {lat: latitude, longi: longitude});
	};
	$scope.latitude = "";
    $scope.longitude = "";
}

