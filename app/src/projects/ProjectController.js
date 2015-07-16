(function(){

  angular
       .module('projects')
       .controller('ProjectController', [
          'projectService', '$q',
          ProjectController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function ProjectController(projectService, $q) {
    var self = this;

    //self.selected     = null;
    self.projects = [ ];

    // Load all projects
    projectService
      .loadAllProjects()
      .then( function( projects ) {     
        var projectsResults = projects.results;

        for (var i = 0; i < projectsResults.length; i++) {
          projectsResults[i].CD = new Date(parseInt(projectsResults[i].CD));
        }

        self.projects = projectsResults;        
      });
  }
})();
