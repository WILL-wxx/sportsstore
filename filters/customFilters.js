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
})
.filter("range",function($filter){
	return function(data,pageIndex,pageSize){
		var startIndex = (pageIndex-1)*pageSize;
		if(data.size<startIndex){
			return [];
		}else{
			return $filter("limitTo")(data.splice(startIndex), pageSize);
		}
	};
})
.filter("pageCountFt",function(){
	return function(data,pageSize){
		var result =[];
		for (var i = 0; i < Math.ceil(data.length / pageSize); i++) {
			result.push(i);
		};
		return result;
	};
});
