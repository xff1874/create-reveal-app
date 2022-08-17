#!/usr/bin/env node

import { getVersion } from "./getVersion"

const child_process = require('child_process');
const fs = require("fs");
const chalk = require('chalk') ;


/**
 *  return the arguments of the command except node and index.ts
 */
const getArgs = () => {
  // We retrieve all the command argumnts except the first 2
  const args = process.argv.slice(2)
  return args
}

/**
 * Command Help
 */
const printCommandHelp = () => {
  const version = getVersion()
  const help = `
        create-reveal-app (version: ${version})

        A simple command to create the reveal.js project.

        Example:

        $ create-reveal-app myreveal

  `
  console.log(help)
}

const symbols = getArgs()

// Print help if no arguments
if (symbols.length === 0) {
  printCommandHelp()
  getVersion()
  process.exit(0)
}

const now = new Date().toISOString()


const targetDir = symbols[0] || 'revealjs'
const repoExists = fs.existsSync(`${targetDir}`);
if (repoExists) {
  console.log(chalk.blue.bgRed.bold(`${targetDir} already exists`));
  process.exit(0)
}

console.log(chalk.green("begin to download repository...."));

const repo = `git clone https://github.com/hakimel/reveal.js.git ${targetDir}  --progress`;

child_process.execSync(`${repo}`);

console.log(chalk.green(" download successful"));



