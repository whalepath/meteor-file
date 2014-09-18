Package.describe({
  summary: "Simple file uploading for Meteor",
  version:"0.9.1",
  git:"https://github.com/whalepath/meteor-file.git"
});

Package.onUse(function (api) {
  api.use(["underscore", "ejson"], ["client", "server"]);
  api.use(["templating", "spacebars", "ui"], "client");
  api.addFiles(["meteor-file.js"], ["client", "server"]);
  api.addFiles(["meteor-file-uploader.html", "meteor-file-uploader.js"], "client");

  if (typeof api.export !== 'undefined') {
    api.export("MeteorFile", ["client", "server"]);
  }
});

Package.onTest(function (api) {
  api.use(["meteor-file", "tinytest", "test-helpers"]);
  api.add_files("meteor-file-test.js", ["client", "server"]);
});
