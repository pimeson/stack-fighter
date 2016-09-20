app.config(function ($stateProvider) {
    $stateProvider.state('myOrders', {
        url: '/my-orders',
        templateUrl: 'js/order/myOrders.html',
        resolve: {
          orders: function(OrderFactory){
            return OrderFactory.getU2serOrders();
          }
        },
        controller: function($scope, orders){
          $scope.orders = orders;
        }
    });
});
