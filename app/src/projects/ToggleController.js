(function(){
  'use strict';
  
  angular
    .module('projects')
      .controller('ToggleController', ToggleController);

  /**
   * Toggle Controller for projects accordion
   * @param $scope
   */
  function ToggleController($scope) {
    $scope.visible = false;

    $scope.toggle = function() {
      $scope.visible = !$scope.visible;
    };
  }

})();
