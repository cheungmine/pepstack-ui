
/**
 * treemenu.js
 * 2015-09-18
 */
var TreeMenu = function (menuId, display) {
    this._init(menuId, display);
};


TreeMenu.prototype._init = function (menuId, display) {
    this.menu = {
        menuId: menuId,
        display: display,
        submenus: []
    };
};


// public:
//
TreeMenu.prototype.toString = function () {
    return "[javascript PepstackUI.TreeMenu]";
};


TreeMenu.prototype.toJsonString = function () {
    return JSON.stringify(this.menu);
};


TreeMenu.prototype.toHtmlString = function () {
    var html = '<li id ="' + this.menu.menuId + '"><a href="javascript:void(0);" class="dropdown-toggle">' +
        '<i class="icon-desktop"></i><span class="menu-text">' +  this.menu.display + '</span><b class="arrow icon-angle-down"></b></a>\n';

    html += '  <ul class="submenu">\n';
    this.menu.submenus.forEach(function (el) {
        var li = '    <li id="' + el.itemId + '"><a href="' + el.url + '"><i class="' + el.iclass + '"></i>' + el.display + '</a></li>\n';
        html += li;
    });
    html += '  </ul>\n';

    html += '</li>\n';
    return html;
};


TreeMenu.prototype.addSubmenu = function (itemId, display, url, optClass) {
    var iclass = (optClass === undefined ? "icon-double-angle-right" : optClass);

    this.menu.submenus.push({
        itemId: itemId,
        display: display,
        url: url,
        iclass: iclass
    });
};
