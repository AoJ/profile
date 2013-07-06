var profile = require('./index');
profile.allow('example');

var tick = profile('example').tick;
tick('processed');
tick('results');
