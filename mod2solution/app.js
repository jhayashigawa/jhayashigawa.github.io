(function(){
'use stricts';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.buyList = ShoppingListCheckOffService.getToBuy();
  toBuy.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;
  alreadyBought.boughtList = ShoppingListCheckOffService.getBoughtList();

}


function ShoppingListCheckOffService(){
  var service = this;

  var buyList = [
    {name:"turtle doves", quantity:2},
    {name:"cubes", quantity:5},
    {name:"vegetable", quantity:1},
    {name:"edible things", quantity:2},
    {name:"inanimate objects", quantity:10}
  ];
  var boughtList = [];

  service.buyItem = function (itemIndex) {
    var boughtItem = buyList.splice(itemIndex,1)[0];
    boughtList.push(boughtItem);

  };

  service.getToBuy = function(){
    return buyList;
  };

  service.getBoughtList = function(){
      return boughtList;
    };
}



})();
