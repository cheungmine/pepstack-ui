
/**
 * end.js
 * public interfaces:
 */
window.pepstackUI = {};

window.pepstackUI.useAssets = function (assets) {
    return PepUI.getInstance(assets);
};

window.pepstackUI.UIGroup = UIGroup;

window.pepstackUI.TextMenu = TextMenu;
window.pepstackUI.SlideMenu = SlideMenu;
window.pepstackUI.TreeMenu = TreeMenu;
window.pepstackUI.MegaMenu = MegaMenu;

window.pepstackUI.Accordion = Accordion;
window.pepstackUI.AccordionPanel = AccordionPanel;

}(window, jQuery));
