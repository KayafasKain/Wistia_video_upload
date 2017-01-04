var app = angular.module('myApp', []);

app.config(function( $interpolateProvider ) {
	$interpolateProvider.startSymbol('[{');
	$interpolateProvider.endSymbol('}]');
});


//controllers
	app.controller('main_cont', function($scope, $http, $sce) {			

			//variables			
				$scope.name = "";
				$scope.email = "";
				$scope.subject = "";
				$scope.message = "";
			

			//get raw menu structure
				$scope.send_mail = function(){
					if($scope.name.length > 0 && $scope.email.length > 0 && $scope.subject.length > 0 && $scope.message.length > 0 ){
						$http.post('/send_mail', {
							
							name: $scope.name,
							email: $scope.email,
							subject: $scope.subject,
							message: $scope.message

						}).success(function(res) {
							alert(res.result);					
						});
					}
				}


	})
