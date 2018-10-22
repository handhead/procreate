"use strict";

/**
* create a new project.
* Return a string in the console.
*
* @author Vinícius Rodrigues
*
* @param {string}   project_name a name of project
* @param {string}   framework_name a web framework name (default: express)
*
* @return {boolean} status about creation
*/
var create = function (project_name, framework_name) {
    try {
        if (arguments[1]) {
            console.log("create new project named " + project_name + ", using the " + framework_name);
            return true;
        } else throw Error("inconsistent arguments");
    } catch (error) {
        return false;
    }
};

exports.create = create;