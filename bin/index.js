#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getVersion_1 = require("./getVersion");
var child_process = require('child_process');
var fs = require("fs");
var chalk = require('chalk');
/**
 *  return the arguments of the command except node and index.ts
 */
var getArgs = function () {
    // We retrieve all the command argumnts except the first 2
    var args = process.argv.slice(2);
    return args;
};
/**
 * Command Help
 */
var printCommandHelp = function () {
    var version = getVersion_1.getVersion();
    var help = "\n        create-reveal-app (version: " + version + ")\n\n        A simple command to create the reveal.js project.\n\n        Example:\n\n        $ create-reveal-app myreveal\n\n  ";
    console.log(help);
};
var symbols = getArgs();
// Print help if no arguments
if (symbols.length === 0) {
    printCommandHelp();
    getVersion_1.getVersion();
    process.exit(0);
}
var now = new Date().toISOString();
var targetDir = symbols[0] || 'revealjs';
var repoExists = fs.existsSync("" + targetDir);
if (repoExists) {
    console.log(chalk.blue.bgRed.bold(targetDir + " already exists"));
    process.exit(0);
}
console.log(chalk.green("begin to download repository...."));
var repo = "git clone https://github.com/hakimel/reveal.js.git " + targetDir + "  --progress";
child_process.execSync("" + repo);
console.log(chalk.green(" download successful"));
//# sourceMappingURL=index.js.map