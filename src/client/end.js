
/**
 * end.js
 * public interfaces:
 */
window.pepstackui = {};

window.pepstackui.useAssets = function (assets) {
    return PepUI.getInstance(assets);
};

/*TODO:
window.pepstackui.UIGroup = UIGroup;

window.pepstackui.TextMenu = TextMenu;
window.pepstackui.SlideMenu = SlideMenu;
window.pepstackui.TreeMenu = TreeMenu;
window.pepstackui.MegaMenu = MegaMenu;

window.pepstackui.Accordion = Accordion;
window.pepstackui.AccordionPanel = AccordionPanel;
*/

}(window, jQuery));
