/**
 * index.js
 * version: 0.0.1
 */
Utils.importScripts(
    'assets/js/jquery-2.0.3.min.js',
    'script/pepstack-ui.js'
);

(function (window, undefined) {
    "use strict";

    PepstackUI.useAssets("./assets");

    var treemenu = new PepstackUI.TreeMenu("uiComponents", "UI 组件");

    treemenu.addSubmenu("uiElements", "组件", "elements.html");
    treemenu.addSubmenu("uiTreeview", "树菜单", "treeview.html");
    treemenu.addSubmenu("uiJQueryUI", "jQuery UI", "jquery-ui.html");
    treemenu.addSubmenu("uiDragList", "可拖拽列表", "nestable-list.html");

    alert(treemenu.toJsonString());

    var html = treemenu.toHtmlString();
    alert(html);

    $('#navmenu').html(html);
}(window));
