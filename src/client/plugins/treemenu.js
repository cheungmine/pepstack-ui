
/**
 * treemenu.js
 * 2015-09-18
 */
var TreeMenu = function (menuId, display, iclass) {
    this._init(menuId, display, iclass);
};

TreeMenu.TYPE_STRING = "[PepstackUI.TreeMenu]";

TreeMenu.prototype._init = function (menuId, display, iclass) {
    /* iclass:
     *   icon-desktop
     *   icon-list
     *   icon-edit
     */
    this.menu = {
        id: menuId,
        display: display,
        iclass: iclass,
        submenus: []
    };
};


// public:
//
TreeMenu.prototype.typeString = function () {
    return TreeMenu.TYPE_STRING;
};


TreeMenu.prototype.toJsonString = function (indent) {
    if (indent === undefined) {
        indent = '';
    }

    var submenusJson;
    this.menu.submenus.forEach(function (el) {
        if (submenusJson === undefined) {
            submenusJson = '[\n' + el.toJsonString(indent + '    ');
        } else {
            submenusJson += ',\n' + el.toJsonString(indent + '    ');
        }
    });
    if (submenusJson === undefined) {
        submenusJson = '[]\n';
    } else {
        submenusJson += '\n' + indent + '  ]\n';
    }

    var json =
        indent + '{\n' +
        indent + '  "id": "' + this.menu.id + '",\n' +
        indent + '  "display": "' + this.menu.display + '",\n' +
        indent + '  "iclass": "' + this.menu.iclass + '",\n' +
        indent + '  "submenus": ' + submenusJson +
        indent + '}';
    return json;
};


TreeMenu.prototype.toHtmlString = function (indent) {
    if (indent === undefined) {
        indent = '';
    }

    var submenusHtml = indent + '  <ul class="submenu">\n';
    this.menu.submenus.forEach(function (el) {
        submenusHtml += el.toHtmlString(indent + '    ');
    });
    submenusHtml += indent + '  </ul>\n';

    var html =
        indent + '<li id ="' + this.menu.id + '">\n' +
        indent + '  <a href="javascript:void(0);" class="dropdown-toggle">\n' +
        indent + '    <i class="' + this.menu.iclass + '"></i>\n' +
        indent + '    <span class="menu-text">' +  this.menu.display + '</span>\n' +
        indent + '    <b class="arrow icon-angle-down"></b>\n' +
        indent + '  </a>\n' + submenusHtml +
        indent + '</li>\n';

    return html;
};


TreeMenu.prototype.addSubmenu = function (submenu) {
    this.menu.submenus.push(submenu);
};

