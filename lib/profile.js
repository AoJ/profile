var util = require('util');
var bytes = require('bytes');

var allowed = [];


exports = module.exports = function(type) {
    var start = new Date().getTime();

    return {
        tick: function(desc) {
            if(allowed.indexOf(type) === -1) return false;
            var duration = (new Date().getTime() - start);
            var memory = process.memoryUsage();
            util.log(type + "\t" + duration + "ms\t" + bytes(memory.heapUsed) + "/" + bytes(memory.heapTotal) + "\t\t" + desc);
        }
    };
    
}

module.exports.allow = function(type) {
    if(allowed.indexOf(type) === -1) allowed.push(type);
}