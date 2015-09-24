#! /usr/bin/env node

var ChildProcess = require('child_process');

var location = __dirname + '/smile-tool.jar';
var args = process.argv.slice(2);

args = ['-jar', location].concat(args);

console.log('java ' + args.join(' '));

ChildProcess.spawn('java', args, { stdio: 'inherit' });