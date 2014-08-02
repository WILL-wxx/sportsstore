angular.module("customFilters", [])
.filter("unique", function() {
	return function(data, propetyName){
		if (angular.isArray(data) &&angular.isString(propetyName) ) {
			var results =[];
			var keys = {};
			for (var i = 0; i < data.length; i++) {
				var v = data[i][propetyName];
				if (angular.isUndefined(keys[v])) {
					keys[v] = true;
					results.push(v);
				};
			};
			return  results;
		}else{
			return data;
		}
	};
});
