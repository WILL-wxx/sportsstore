angular.module("sportsStore", ["customFilters"]); // 两个参数表示新建一个module moduleName 不能重复
angular.module("sportsStore") // 一个参数表示掉用 module  moduleName必须存在
	.controller("sportsStoreCtrl", function($scope) {
		$scope.data = {
			products: [{
				name: "Product #1",
				description: "A product",
				category: "Category #1",
				price: 100
			}, {
				name: "Product #2",
				description: "A product",
				category: "Category #1",
				price: 110
			}, {
				name: "Product #3",
				description: "A product",
				category: "Category #2",
				price: 210
			}, {
				name: "Product #4",
				description: "A product",
				category: "Category #3",
				price: 202
			}]
		}
	});