angular.module("car",[])
.factory("car",function(){
    var carData =[];
    return{
        addProduct: function(id,name,price){
            var addedToExistingItem = false;
            for(var i = 0; i<carData.length;i++){
                if(carDate[i].id == id){
                    carDateS[i].count++;
                    addedToExistingItem=true;
                }
            }
            if(!addedToExistingItem){
                carData.push({
                    id:id,
                    count:1,
                    price:price,
                    name:name
                });
            }
        },
        removeProduct:function(id){
            for(var i=0 ;i<carData.length;i++){
                if(carData[i].id ==id){
                    cartData.splice(i,1);
                    break;
                }
            }
        },
        getProduct:function(){
            return cartData;
        }
    };
});