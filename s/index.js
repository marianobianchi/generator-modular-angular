'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator()
{
    ScriptBase.apply(this, arguments);
};
util.inherits(Generator, ScriptBase);

Generator.prototype.createDirectiveFiles = function createDirectiveFiles()
{
    this.isService = true;

    this.generateSourceAndTest(
        'service',
        null,
        '-s'
    );
};