var fs=require('fs'),
  requirejs = require('requirejs');

var config = {
  baseUrl: '.',
  name: 'remoteStorage',
  out: 'builds/0.5.0/remoteStorage.js',
  wrap: {
    startFile: 'start.frag',
    endFile: 'end.frag'
  }
};

requirejs.optimize(config, function (buildResponse) {
  //buildResponse is just a text output of the modules
  //included. Load the built file for the contents.
  //Use config.out to get the optimized file contents.
  var contents = fs.readFileSync(config.out, 'utf8');
});
