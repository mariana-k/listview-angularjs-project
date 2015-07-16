'use strict';

var ProjectList = require('../pages/ProjectList.js');

describe('my app', function() {

  var projects = new ProjectList();

  beforeEach(function() {
    projects.loadAll();
  });

  it('should load a list of projects', function() {
    expect(projects.count()).toBeGreaterThan(1);
  });
});
