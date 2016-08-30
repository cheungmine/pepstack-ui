
/**
 * pepui.js
 *
 * http://www.cleancss.com/html-beautify/
 */
var PepUI = function (assetsRoot) {
    this._init(assetsRoot);
};

PepUI.getInstance = function (assetsRoot) {
    var ob = new PepUI(assetsRoot);
    return ob;
};

/**
 * static variable: VERSION
 * will be replaced by version.txt after make
 */
PepUI.prototype._version = "@VERSION";

PepUI.prototype._init = function (assetsRoot) {
    var assets_js = assetsRoot + "/js/";
    var assets_css = assetsRoot + "/css/";

    var browser = Utils.getBrowserAgent();
    Utils.log(browser.agent);

    //
    // css
    //
    Utils.addCSSFiles(
        // <!-- bootstrap & fontawesome -->
        // <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        // <link rel="stylesheet" href="assets/font-awesome/4.5.0/css/font-awesome.min.css" />
        assets_css + 'bootstrap.min.css',
        assetsRoot + '/font-awesome/4.5.0/css/font-awesome.min.css',

        // <!-- page specific plugin styles -->
        // <!-- text fonts -->
        // <link rel="stylesheet" href="assets/css/fonts.googleapis.com.css" />
        assets_css + 'fonts.googleapis.com.css',

        // <link rel="stylesheet" href="assets/css/ace-skins.min.css" />
        // <link rel="stylesheet" href="assets/css/ace-rtl.min.css" />
        assets_css + 'ace-skins.min.css',
        assets_css + 'ace-rtl.min.css'
    );

    // <!-- ace styles -->
    // <link rel="stylesheet" href="assets/css/ace.min.css" class="ace-main-stylesheet" id="main-ace-style" />
    Utils.addCSSStyle(assets_css + 'ace.min.css', "ace-main-stylesheet", "main-ace-style");

    if (Utils.isTrue(browser.ie)) {
        if (browser.ieVer.isLtIE10) {
            // <!--[if lte IE 9]>
            // <link rel="stylesheet" href="assets/css/ace-part2.min.css" class="ace-main-stylesheet" />
            // <![endif]-->
            Utils.addCSSStyle(assets_css + 'ace-part2.min.css', 'ace-main-stylesheet', '');

            // <!--[if lte IE 9]>
            // <link rel="stylesheet" href="assets/css/ace-ie.min.css" />
            // <![endif]-->
            Utils.addCSSStyle(assets_css + 'ace-ie.min.css', '', '');
        }
    }

    //
    // js
    //
    // <!-- basic scripts -->
    Utils.importScripts(
        // <!--[if !IE]> -->
        // <script src="assets/js/jquery-2.1.4.min.js"></script>
        // <!-- <![endif]-->
        assets_js + 'jquery-2.1.4.min.js',

        // <!-- inline styles related to this page -->
        // <!-- ace settings handler -->
        // <script src="assets/js/ace-extra.min.js"></script>
        assets_js + 'ace-extra.min.js'
    );

    if (Utils.isTrue(browser.ie)) {
        // <!--[if IE]>
        // <script src="assets/js/jquery-1.11.3.min.js"></script>
        // <![endif]-->
        Utils.importScripts(assets_js + 'jquery-1.11.3.min.js');

        // <!-- HTML5shiv and Respond.js for IE8 to support HTML5 elements and media queries -->        
        if (browser.ieVer.isLtIE9) {
            // <!--[if lte IE 8]>
            // <script src="assets/js/excanvas.min.js"></script>
            // <script src="assets/js/html5shiv.min.js"></script>
            // <script src="assets/js/respond.min.js"></script>
            // <![endif]-->
            Utils.importScripts(
                assetsJS + 'excanvas.min.js',
                assetsJS + 'html5shiv.min.js',
                assetsJS + 'respond.min.js'
            );
        }
    }

    if (document.hasOwnProperty("ontouchstart")) {
        // <script type="text/javascript">
        //     if('ontouchstart' in document.documentElement) document.write("<script src='assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
        // </script>
        Utils.importScripts(assets_js + 'jquery.mobile.custom.min.js');
    }

    Utils.importScripts(
        assets_js + 'bootstrap.min.js',
        assets_js + 'jquery-ui.custom.min.js',
        assets_js + 'jquery.ui.touch-punch.min.js',
        assets_js + 'jquery.easypiechart.min.js',
        assets_js + 'jquery.sparkline.index.min.js',
        assets_js + 'jquery.flot.min.js',
        assets_js + 'jquery.flot.pie.min.js',
        assets_js + 'jquery.flot.resize.min.js',

        // <!-- ace scripts -->
        assets_js + 'ace-elements.min.js',
        assets_js + 'ace.min.js'
    );
};

// public:
//
PepUI.prototype.toString = function () {
    return "[javascript pepstackui.PepUI]";
};
