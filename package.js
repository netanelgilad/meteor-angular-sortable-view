Package.describe({
  summary: "Fully declarative (multi)sortable for AngularJS",
  version: "0.0.13_1",
  git: "https://github.com/netanelgilad/meteor-angular-sortable-view.git",
  name: "netanelgilad:angular-sortable-view"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');

  api.use('angular:angular@1.3.0', 'client');

  api.addFiles('angular-sortable-view.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:angular-sortable-view', 'client');
  api.addFiles('netanelgilad:angular-sortable-view-tests.js', 'client');
});
