Package.describe({
  summary: "Fully declarative (multi)sortable for AngularJS",
  version: "0.0.1",
  git: "https://github.com/netanelgilad/meteor-angular-sortable-view.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('urigo:angular@0.4.2', 'client');

  api.addFiles('angular-sortable-view.min.js', 'client');

  // Client files.
  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:angular-sortable-view');
  api.addFiles('netanelgilad:angular-sortable-view-tests.js');
});