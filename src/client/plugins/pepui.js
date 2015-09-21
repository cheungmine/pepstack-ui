
/**
 * pepui.js
 * 2015-09-18
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

    var browser = Utils.getBrowserAgent();

    if (Utils.isTrue(browser.ie)) {
        if (browser.ieVer.isLtIE9) {
            // HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries
            // <!--[if lt IE 9]>
            Utils.importScripts(assetsRoot + '/js/excanvas.min.js',
                assetsRoot + '/js/html5shiv.js',
                assetsRoot + '/js/respond.min.js');
            // <![endif]-->
        }
    }

    Utils.importScripts(assetsRoot + '/js/ace-extra.min.js',
        assetsRoot + '/js/bootstrap.min.js',
        assetsRoot + '/js/typeahead-bs2.min.js',
        assetsRoot + '/js/jquery-ui-1.10.3.custom.min.js',
        assetsRoot + '/js/jquery.ui.touch-punch.min.js',
        assetsRoot + '/js/jquery.slimscroll.min.js',
        assetsRoot + '/js/jquery.easy-pie-chart.min.js',
        assetsRoot + '/js/jquery.sparkline.min.js',
        assetsRoot + '/js/flot/jquery.flot.min.js',
        assetsRoot + '/js/flot/jquery.flot.pie.min.js',
        assetsRoot + '/js/flot/jquery.flot.resize.min.js',
        assetsRoot + '/js/ace-elements.min.js',
        assetsRoot + '/js/ace.min.js');

    if (document.hasOwnProperty("ontouchend")) {
        Utils.importScripts(assetsRoot + '/js/jquery.mobile.custom.min.js');
    }
};

// public:
//
PepUI.prototype.toString = function () {
    return "[javascript PepstackUI.PepUI]";
};
