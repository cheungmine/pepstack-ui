/**
 * jslint-check.js
 *
 * MAKE SURE jslint_path IS CORRECT
 * CHANGE js_files FOR CHECKING
 */
var
    jslint_path = "./bin/lib/JSLint-master/jslint",
    js_files = [
        //ignored: "./dep/prerequisite.js",
        "./dep/security.js",
        "./dep/encode.js",
        "./src/client/error.js",
        "./src/client/plugins/pepui.js",
        "./src/client/plugins/treemenu.js",
        "./src/client/plugins/megamenu.js"
    ]
;

/**
 * DO NOT CHANGE BELOW CODES
 */
var
    JSLINT = require(jslint_path).JSLINT,
    println = console.log,
    index
;

/**
 * All of the following are known issues that we think are 'ok'
 * (in contradiction with JSLint) more information here:
 * http://docs.jquery.com/JQuery_Core_Style_Guidelines
 */
var ok = {
    "Expected an identifier and instead saw 'undefined' (a reserved word).": true,
    "Expected a conditional expression and instead saw an assignment.": true,
    "Expected an identifier and instead saw 'default' (a reserved word).": true,
    "Insecure '.'.": true,
    "Insecure '^'.": true,
    'Missing "use strict" statement.': true
};

var jscheckfile = function (jsFile) {
    println( " -- '" + jsFile + "'");

    var src = require("fs").readFileSync(jsFile, "utf8");

    var ret = JSLINT(src, {
        browser: true,
        sloppy: true,
        devel: true,
        evil: true,
        forin: true,
        maxerr: 20,
        undef: true,
        indent: 4,
        // white: true,
        plusplus: true,
        vars: true,
        nomen: true,
        // jquery: true,
        todo: true,
        bitwise: true,
    });

    var e = JSLINT.errors, found = 0, w, j;

    if (! e) {
        println( "Please chmod at file: " + jsFile );
        return;
    }

    for ( j = 0; j < e.length; j++ ) {
        w = e[j];

        if ( !ok[ w.reason ] ) {
            found++;
            println( w.evidence );
            println( "Problem at line " + w.line + " character " + w.character + ": " + w.reason );
        }
    }

    if (found > 0) {
        println( "    " + found + " error(s) found." );
    } else {
        println( "    NO ERROR." );
    }
}

for (index = 0; index < js_files.length; index++) {
    jscheckfile(js_files[index]);
}

/* end of jslint-check.js */