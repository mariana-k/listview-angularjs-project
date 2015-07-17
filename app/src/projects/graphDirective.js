(function(){
  'use strict';
 
  angular
    .module('projects')
      .directive('graphDirective', graphDirective);



  /**
   * Graph directive
   * @param $parse
   */
  function graphDirective($parse) {
    return {
      restrict: 'EA',
      replace: false,
      scope: {
          value: '@'
      },
      template: '<div class="mychart"></div>',
      link: function (scope, element, attrs) {
        var mydata = [40,4,55,15,16,33,52,20],
          mychart = d3.selectAll('.mychart');
          
          mychart.selectAll('div')
          .data(mydata).enter()
          .append('div')
          .transition().ease('elastic')
          .style('width', function(d) { return d + '%'; })
          .text(function(d) { return d + '%'; });
      } 
    };
  }

})();
