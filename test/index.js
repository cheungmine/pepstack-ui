/**
 * index.js
 * version: 0.0.1
 */
Utils.importScripts(
    "assets/js/jquery-2.0.3.min.js",
    "assets/js/date-time/bootstrap-datepicker.min.js",
    "assets/js/jqGrid/jquery.jqGrid.min.js",
    "assets/js/jqGrid/i18n/grid.locale-en.js",
    "script/pepstack-ui.js"
);

(function (window, undefined) {
    "use strict";

    PepstackUI.useAssets("./assets");

    var menuGroup = new PepstackUI.MenuGroup();

    var mnuDashboard = new PepstackUI.TextMenu("mnuDashboard", "控制台", "index.html", "icon-dashboard");

    var mnuUI = new PepstackUI.TreeMenu("mnuUI", "UI 组件", "icon-desktop");
    {
        mnuUI.addSubmenu(new PepstackUI.TextMenu("uiElements", "组件", "elements.html"));
        mnuUI.addSubmenu(new PepstackUI.TextMenu("uiButtons", "按钮 & 图表", "buttons.html"));
        mnuUI.addSubmenu(new PepstackUI.TextMenu("uiTreeview", "树菜单", "treeview.html"));
        mnuUI.addSubmenu(new PepstackUI.TextMenu("uiJQueryUI", "jQuery UI", "jquery-ui.html"));
        mnuUI.addSubmenu(new PepstackUI.TextMenu("uiDragList", "可拖拽列表", "nestable-list.html"));

        var g3 = new PepstackUI.TreeMenu("uiG3", "三级菜单", "icon-double-angle-right");
        g3.addSubmenu(new PepstackUI.TextMenu("uiG3g1", "第一级", "#", "icon-leaf"));

        var g4 = new PepstackUI.TreeMenu("uiG3g4", "第四级", "icon-pencil");
        g4.addSubmenu(new PepstackUI.TextMenu("uiAddProd", "添加产品", "#", "icon-plus"));
        g4.addSubmenu(new PepstackUI.TextMenu("uiSeeProd", "查看商品", "#", "icon-eye-open"));

        g3.addSubmenu(g4);
        mnuUI.addSubmenu(g3);
    }

    var mnuList = new PepstackUI.TreeMenu("mnuList", "表格", "icon-list");
    {
        mnuList.addSubmenu(new PepstackUI.TextMenu("liTables", "简单&动态", "tables.html"));
        mnuList.addSubmenu(new PepstackUI.TextMenu("liJqgrid", "jqGrid 插件", "jqgrid.html"));
    }

    var mnuForms = new PepstackUI.TreeMenu("mnuForms", "表单", "icon-edit");
    {
        mnuForms.addSubmenu(new PepstackUI.TextMenu("fmElements", "表单组件", "form-elements.html"));
        mnuForms.addSubmenu(new PepstackUI.TextMenu("fmWizard", "向导提示&验证", "form-wizard.html"));
        mnuForms.addSubmenu(new PepstackUI.TextMenu("fmWysiwyg", "编辑器", "wysiwyg.html"));
        mnuForms.addSubmenu(new PepstackUI.TextMenu("fmDropzone", "文件上传", "dropzone.html"));
    }

    var mnuMore = new PepstackUI.TreeMenu("mnuMore", "更多页面", "icon-tag");
    {
        mnuMore.addSubmenu(new PepstackUI.TextMenu("moProfile", "用户信息", "profile.html"));
        mnuMore.addSubmenu(new PepstackUI.TextMenu("moInbox", "收件箱", "inbox.html"));
        mnuMore.addSubmenu(new PepstackUI.TextMenu("moPricing", "售价单", "pricing.html"));
        mnuMore.addSubmenu(new PepstackUI.TextMenu("moInvoice", "购物车", "invoice.html"));
        mnuMore.addSubmenu(new PepstackUI.TextMenu("moTimeline", "时间轴", "timeline.html"));
        mnuMore.addSubmenu(new PepstackUI.TextMenu("moLogin", "登录&注册", "login.html"));
    }

    var mnuOther = new PepstackUI.TreeMenu("mnuOther", "其他页面", "icon-file-alt");
    {
        mnuOther.addSubmenu(new PepstackUI.TextMenu("otFag", "帮助", "faq.html"));
        mnuOther.addSubmenu(new PepstackUI.TextMenu("otError404", "404错误页面", "error-404.html"));
        mnuOther.addSubmenu(new PepstackUI.TextMenu("otError500", "500错误页面", "error-500.html"));
        mnuOther.addSubmenu(new PepstackUI.TextMenu("otGrid", "网格", "grid.html"));
        mnuOther.addSubmenu(new PepstackUI.TextMenu("otBlank", "空白页面", "blank.html"));
    }

    menuGroup.addMenu(mnuDashboard);
    menuGroup.addMenu(new PepstackUI.TextMenu("mnuTypo", "文字排版", "typography.html", "icon-text-width"));
    menuGroup.addMenu(mnuUI);

    menuGroup.addMenu(mnuList);
    menuGroup.addMenu(mnuForms);

    menuGroup.addMenu(new PepstackUI.TextMenu("mnuWidgets", "插件", "widgets.html", "icon-list-alt"));
    menuGroup.addMenu(new PepstackUI.TextMenu("mnuCalendar", "日历", "calendar.html", "icon-calendar"));
    menuGroup.addMenu(new PepstackUI.TextMenu("mnuPicture", "相册", "gallery.html", "icon-picture"));

    menuGroup.addMenu(mnuMore);
    menuGroup.addMenu(mnuOther);

    var html = menuGroup.toHtmlString();

    Utils.log(menuGroup.toJsonString());
    Utils.log(html);

    $('#navmenu').html(html);
}(window));

