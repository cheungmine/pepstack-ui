
/**
 * textmenu.js
 * 2015-09-21
 */
var TextMenu = function (menuId, display, url, iclass) {
    this._init(menuId, display, url, iclass);
};

TextMenu.TYPE_STRING = "[PepstackUI.TextMenu]";

TextMenu.prototype._init = function (menuId, display, url, optClass) {
    var iclass = (optClass === undefined ? "icon-double-angle-right" : optClass);

    this.menu = {
        id: menuId,
        display: display,
        url: url,
        iclass: iclass
    };
};

// public:
//
TextMenu.prototype.typeString = function () {
    return TextMenu.TYPE_STRING;
};


TextMenu.prototype.toJsonString = function (indent) {
    if (indent === undefined) {
        indent = '';
    }

    var json =
        indent + '{\n' +
        indent + '  "id": "' + this.menu.id + '",\n' +
        indent + '  "display": "' + this.menu.display + '",\n' +
        indent + '  "iclass": "' + this.menu.iclass + '",\n' +
        indent + '  "url": "' + this.menu.url + '"\n' +
        indent + '}';
    return json;
};


TextMenu.prototype.toHtmlString = function (indent) {
    if (indent === undefined) {
        indent = '';
    }

    var html =
        indent + '<li id ="' + this.menu.id + '">\n' +
        indent + '  <a href="' + this.menu.url + '">\n' +
        indent + '    <i class="' + this.menu.iclass + '"></i>\n' +
        indent + '    <span class="menu-text">' + this.menu.display + '</span>\n' +
        indent + '  </a>\n' +
        indent + '</li>\n';

    return html;
};

