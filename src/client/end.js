
/**
 * end.js
 * public interfaces:
 */
window.PepstackUI = {};

window.PepstackUI.useAssets = function (assets) {
    return PepUI.getInstance(assets);
};

window.PepstackUI.SlideMenu = SlideMenu;
window.PepstackUI.TreeMenu = TreeMenu;
window.PepstackUI.MegaMenu = MegaMenu;

}(window, jQuery));
