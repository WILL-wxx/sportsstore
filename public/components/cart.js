angular.module("cart",[])
.factory("cart",function(){
    var cartData =[];
    return{
        addProduct: function(id,name,price){
            var addedToExistingItem = false;
            for(var i = 0; i<cartData.length;i++){
                if(cartDate[i].id == id){
                    carDateS[i].count++;
                    addedToExistingItem=true;
                }
            }
            if(!addedToExistingItem){
                cartData.push({
                    id:id,
                    count:1,
                    price:price,
                    name:name
                });
            }
        },
        removeProduct:function(id){
            for(var i=0 ;i<cartData.length;i++){
                if(cartData[i].id ==id){
                    cartData.splice(i,1);
                    break;
                }
            }
        },
        getProducts:function(){
            return cartData;
        }
    }
})
.directive("cartSummary",function(cart){
    return{
        restrict:"E",
        templateUrl:"components/cart/cartSummary.html",
        conroller:function($scope){
            var cartData = cat.getProducts();
            $scope.total= function(){
                var total =0;
                for(var i=0;i<cartData.length;i++){
                    total+=(cartData[i].price * cartData[i].count);
                }
                return total;
            };
            $scope.itemCount=function(){
                var total =0;
                for(var i=0;i<cartData.length;i++){
                    total+= cartData[i].count;
                }
                return total;
            }
        },
    };
});