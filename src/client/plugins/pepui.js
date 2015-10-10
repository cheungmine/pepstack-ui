
/**
 * pepui.js
 * 2015-09-18
 * http://www.cleancss.com/html-beautify/
 */
var PepUI = function (assetsRoot) {
    this._init(assetsRoot);
};

PepUI.getInstance = function (assetsRoot) {
    var ob = new PepUI(assetsRoot);
    return ob;
};

// static variable: VERSION
// will be replaced by version.txt after make
PepUI.prototype._version = "@VERSION";

PepUI.prototype._init = function (assetsRoot) {
    var assetsJS = assetsRoot + "/js/";

    var browser = Utils.getBrowserAgent();

    if (Utils.isTrue(browser.ie) && browser.ieVer.isLtIE9) {
        // HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries
        Utils.importScripts(
            assetsJS + 'excanvas.min.js',
            assetsJS + 'html5shiv.js',
            assetsJS + 'respond.min.js'
        );
    }

    Utils.importScripts(
        assetsJS + "date-time/bootstrap-datepicker.min.js",
        assetsJS + "jqGrid/jquery.jqGrid.min.js",
        assetsJS + "jqGrid/i18n/grid.locale-en.js",
        assetsJS + 'ace-extra.min.js',
        assetsJS + 'bootstrap.min.js',
        assetsJS + 'typeahead-bs2.min.js',
        assetsJS + 'jquery-ui-1.10.3.custom.min.js',
        assetsJS + 'jquery.ui.touch-punch.min.js',
        assetsJS + 'jquery.slimscroll.min.js',
        assetsJS + 'jquery.easy-pie-chart.min.js',
        assetsJS + 'jquery.sparkline.min.js',
        assetsJS + 'flot/jquery.flot.min.js',
        assetsJS + 'flot/jquery.flot.pie.min.js',
        assetsJS + 'flot/jquery.flot.resize.min.js',
        assetsJS + 'ace-elements.min.js',
        assetsJS + 'ace.min.js'
    );

    if (document.hasOwnProperty("ontouchend")) {
        Utils.importScripts(assetsJS + 'jquery.mobile.custom.min.js');
    }

    var assetsCSS = assetsRoot + "/css/";

    Utils.addCSSFiles(
        // basic styles
        assetsCSS + "bootstrap.min.css",
        assetsCSS + "font-awesome.min.css"
    );

    if (Utils.isTrue(browser.ie) && browser.ieVer.isIE7) {
        Utils.addCSSFiles(
            assetsCSS + "font-awesome-ie7.min.css"
        );
    }

    Utils.addCSSFiles(
        // jqgrid.html
        assetsCSS + "jquery-ui-1.10.3.full.min.css",
        assetsCSS + "datepicker.css",
        assetsCSS + "ui.jqgrid.css",

        // elements.html
        assetsCSS + "jquery-ui-1.10.3.custom.min.css",
        assetsCSS + "jquery.gritter.css",

        // ace styles
        assetsCSS + "ace.min.css",
        assetsCSS + "ace-rtl.min.css",
        assetsCSS + "ace-skins.min.css"
    );

    if (Utils.isTrue(browser.ie) && browser.ieVer.isLteIE8) {
        Utils.addCSSFiles(
            assetsCSS + "ace-ie.min.css"
        );
    }

};

// public:
//
PepUI.prototype.toString = function () {
    return "[javascript PepstackUI.PepUI]";
};
