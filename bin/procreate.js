#!/usr/bin/env node

var program = require("commander");
var package = require("../package.json");
var procreate = require("../lib/index.js");

program
    .version(package.version, "-v, --version");

program
    .command("new <project>")
    // .option("-e, --express", "Remove recursively")
    .option("-f, --framework [name]", "Add the specified web framework [express|hapi]", "express")
    .action(function (project, cmd) {
        procreate.create(project, cmd.framework);
    });

program.on("command:*", function () {
    console.error("Invalid command: %s\nSee --help for a list of available commands.", program.args.join(" "));
    process.exit(1);
});

program.parse(process.argv);

if (!program.args.length) {
    program.help();
}