/**
 * index.js
 * version: 0.0.1
 */
Utils.importScripts(
    "assets/js/jquery-2.0.3.min.js",
    "script/pepstack-ui.js"
);


(function (window, undefined) {
    "use strict";

    pepstackUI.useAssets("./assets");

    var menuGroup = new pepstackUI.UIGroup();

    var mnuDashboard = new pepstackUI.TextMenu("mnuDashboard", "控制台", "index.html", "icon-dashboard");

    var mnuUI = new pepstackUI.TreeMenu("mnuUI", "UI 组件", "icon-desktop");
    {
        mnuUI.addSubmenu(new pepstackUI.TextMenu("uiElements", "组件", "elements.html"));
        mnuUI.addSubmenu(new pepstackUI.TextMenu("uiButtons", "按钮 & 图表", "buttons.html"));
        mnuUI.addSubmenu(new pepstackUI.TextMenu("uiTreeview", "树菜单", "treeview.html"));
        mnuUI.addSubmenu(new pepstackUI.TextMenu("uiJQueryUI", "jQuery UI", "jquery-ui.html"));
        mnuUI.addSubmenu(new pepstackUI.TextMenu("uiDragList", "可拖拽列表", "nestable-list.html"));

        var g3 = new pepstackUI.TreeMenu("uiG3", "三级菜单", "icon-double-angle-right");
        g3.addSubmenu(new pepstackUI.TextMenu("uiG3g1", "第一级", "#", "icon-leaf"));

        var g4 = new pepstackUI.TreeMenu("uiG3g4", "第四级", "icon-pencil");
        g4.addSubmenu(new pepstackUI.TextMenu("uiAddProd", "添加产品", "#", "icon-plus"));
        g4.addSubmenu(new pepstackUI.TextMenu("uiSeeProd", "查看商品", "#", "icon-eye-open"));

        g3.addSubmenu(g4);
        mnuUI.addSubmenu(g3);
    }

    var mnuList = new pepstackUI.TreeMenu("mnuList", "表格", "icon-list");
    {
        mnuList.addSubmenu(new pepstackUI.TextMenu("liTables", "简单&动态", "tables.html"));
        mnuList.addSubmenu(new pepstackUI.TextMenu("liJqgrid", "jqGrid 插件", "jqgrid.html"));
    }

    var mnuForms = new pepstackUI.TreeMenu("mnuForms", "表单", "icon-edit");
    {
        mnuForms.addSubmenu(new pepstackUI.TextMenu("fmElements", "表单组件", "form-elements.html"));
        mnuForms.addSubmenu(new pepstackUI.TextMenu("fmWizard", "向导提示&验证", "form-wizard.html"));
        mnuForms.addSubmenu(new pepstackUI.TextMenu("fmWysiwyg", "编辑器", "wysiwyg.html"));
        mnuForms.addSubmenu(new pepstackUI.TextMenu("fmDropzone", "文件上传", "dropzone.html"));
    }

    var mnuMore = new pepstackUI.TreeMenu("mnuMore", "更多页面", "icon-tag");
    {
        mnuMore.addSubmenu(new pepstackUI.TextMenu("moProfile", "用户信息", "profile.html"));
        mnuMore.addSubmenu(new pepstackUI.TextMenu("moInbox", "收件箱", "inbox.html"));
        mnuMore.addSubmenu(new pepstackUI.TextMenu("moPricing", "售价单", "pricing.html"));
        mnuMore.addSubmenu(new pepstackUI.TextMenu("moInvoice", "购物车", "invoice.html"));
        mnuMore.addSubmenu(new pepstackUI.TextMenu("moTimeline", "时间轴", "timeline.html"));
        mnuMore.addSubmenu(new pepstackUI.TextMenu("moLogin", "登录&注册", "login.html"));
    }

    var mnuOther = new pepstackUI.TreeMenu("mnuOther", "其他页面", "icon-file-alt");
    {
        mnuOther.addSubmenu(new pepstackUI.TextMenu("otFag", "帮助", "faq.html"));
        mnuOther.addSubmenu(new pepstackUI.TextMenu("otError404", "404错误页面", "error-404.html"));
        mnuOther.addSubmenu(new pepstackUI.TextMenu("otError500", "500错误页面", "error-500.html"));
        mnuOther.addSubmenu(new pepstackUI.TextMenu("otGrid", "网格", "grid.html"));
        mnuOther.addSubmenu(new pepstackUI.TextMenu("otBlank", "空白页面", "blank.html"));
    }

    menuGroup.addUI(mnuDashboard);
    menuGroup.addUI(new pepstackUI.TextMenu("mnuTypo", "文字排版", "typography.html", "icon-text-width"));
    menuGroup.addUI(mnuUI);

    menuGroup.addUI(mnuList);
    menuGroup.addUI(mnuForms);

    menuGroup.addUI(new pepstackUI.TextMenu("mnuWidgets", "插件", "widgets.html", "icon-list-alt"));
    menuGroup.addUI(new pepstackUI.TextMenu("mnuCalendar", "日历", "calendar.html", "icon-calendar"));
    menuGroup.addUI(new pepstackUI.TextMenu("mnuPicture", "相册", "gallery.html", "icon-picture"));

    menuGroup.addUI(mnuMore);
    menuGroup.addUI(mnuOther);

    var html = menuGroup.toHtmlString();

    Utils.log(menuGroup.toJsonString());
    Utils.log(html);

    $('#navmenu').html(html);
}(window));

