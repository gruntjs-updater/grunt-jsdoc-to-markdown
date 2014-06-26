"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        jsdoc2md: {
            oneFile: {
                src: "test/fixture/*.js",
                dest: "tmp/docs.md"
            },
            separateFiles: {
                files: [
                    { src: "test/fixture/class.js", dest: "tmp/class.md" },
                    { src: "test/fixture/typedef.js", dest: "tmp/typedef.md" }
                ]
            },
            withOptions: {
                options: {
                    index: true
                },
                src: "test/fixture/*.js",
                dest: "tmp/docs.md"
            }
        }
    });

    grunt.loadTasks("tasks");
    grunt.registerTask("default", "jsdoc2md");  
};
