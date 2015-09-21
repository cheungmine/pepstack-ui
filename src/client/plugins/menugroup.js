
/**
 * menugroup.js
 * 2015-09-21
 */
var MenuGroup = function () {
    this._init();
};

MenuGroup.TYPE_STRING = "[PepstackUI.MenuGroup]";

MenuGroup.prototype._init = function () {
    this.menus = [];
};

// public:
//
MenuGroup.prototype.typeString = function () {
    return MenuGroup.TYPE_STRING;
};


MenuGroup.prototype.addMenu = function (menu) {
    this.menus.push(menu);
};


MenuGroup.prototype.toJsonString = function () {
    var indent = '  ';
    var json;

    this.menus.forEach(function (menu) {
        if (json === undefined) {
            json = '[\n' + menu.toJsonString(indent);
        } else {
            json += ',\n' + menu.toJsonString(indent);
        }
    });

    if (json === undefined) {
        json = '[]';
    } else {
        json += '\n]';
    }
    return json;
};


MenuGroup.prototype.toHtmlString = function () {
    var indent = '';
    var html = '';
    this.menus.forEach(function (menu) {
        html += menu.toHtmlString(indent);
    });
    return html;
};

