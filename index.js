var fs = require('fs')
  , pvjson = require('./WP1.json')
  , pd = require('pretty-data').pd
  //, Ractive = require('ractive');
  // using a modified version of ractive that has the rdf namespace added
  , Ractive = require('./ractive.js')
  ;

var ractive = new Ractive({
  template: fs.readFileSync('./gpml-2013a-template.xml', {encoding: 'utf8'})
  , data: { pvjson: pvjson }
});

var gpml = ractive.toHTML();
gpml = pd.xml(gpml);
var lineDelimitedGpml = gpml.split('\n');
gpml = '<?xml version="1.0" encoding="UTF-8"?>\n' + lineDelimitedGpml.slice(1, lineDelimitedGpml.length - 1).join('\n');
console.log(gpml);
