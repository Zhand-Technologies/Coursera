(function() {
	'use strict'

	angular.module('ShoppingList', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

		ToBuyController.$inject = ['ShoppingListCheckOffService'];
		AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

		function ToBuyController(ShoppingListCheckOffService) {
			var controller = this;

			controller.shoppingList = [
				{name : 'cookies', quantity : '10'},
				{name : 'chocolate cookies', quantity : '5'},
				{name : 'dr pepper', quantity : '8'},
				{name : 'pepsi', quantity : '2'},
				{name : 'water', quantity : '10'}
			]

			ShoppingListCheckOffService.setToBuyArray(controller.shoppingList);

			controller.buyItem = function(itemIndex) {
				ShoppingListCheckOffService.buyItem(itemIndex);
			}
		}

		function AlreadyBoughtController(ShoppingListCheckOffService) {
			var controller = this;

			controller.shoppingList = [];

			ShoppingListCheckOffService.setAlreadyBoughtArray(controller.shoppingList);
		}

		function ShoppingListCheckOffService() {
			var service = this;
			service.toBuyArray = [];
			service.alreadyBoughtArray = [];

			service.setToBuyArray = function(array) {
				service.toBuyArray = array;
			}

			service.setAlreadyBoughtArray = function(array) {
				service.alreadyBoughtArray = array;
			}

			service.buyItem = function(itemIndex) {
				service.alreadyBoughtArray.push(service.toBuyArray[itemIndex]);
				service.toBuyArray.splice(itemIndex, 1);
			}
		}

})();