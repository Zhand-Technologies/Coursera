(function() {
	'use strict'

	angular.module('Assignment', [])
		.controller('AssignmentController', AssignmentController);

	AssignmentController.$inject = ['$scope'];

	function AssignmentController($scope) {
		$scope.message = "";
		$scope.class = "";

		$scope.check = function() {

			var inputToAnalyzeSplit;

			if($scope.inputToAnalyze === undefined) {
				$scope.class = "error";
				$scope.message = "Please enter data first";
			} else {
				$scope.class = "success";
				inputToAnalyzeSplit = $scope.inputToAnalyze.split(",");

				inputToAnalyzeSplit.filter(function(element) {
					return element !== '';
				});

				// We don't want to consider ,, like a valid result.
				if (inputToAnalyzeSplit.filter(function(element) {
						return element !== '';
					}).length <= 3) {
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
				}
			}
		}
	}
})();