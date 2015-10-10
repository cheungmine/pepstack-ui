
/**
 * uigroup.js
 * 2015-09-21
 */
var UIGroup = function () {
    this._init();
};

UIGroup.TYPE_STRING = "[PepstackUI.UIGroup]";

UIGroup.prototype._init = function () {
    this.uis = [];
};

// public:
//
UIGroup.prototype.typeString = function () {
    return UIGroup.TYPE_STRING;
};


UIGroup.prototype.addUI = function (component) {
    this.uis.push(component);
};


UIGroup.prototype.toJsonString = function () {
    var indent = '  ';
    var json;

    this.uis.forEach(function (ui) {
        if (json === undefined) {
            json = '[\n' + ui.toJsonString(indent);
        } else {
            json += ',\n' + ui.toJsonString(indent);
        }
    });

    if (json === undefined) {
        json = '[]';
    } else {
        json += '\n]';
    }
    return json;
};


UIGroup.prototype.toHtmlString = function () {
    var indent = '';
    var html = '';
    this.uis.forEach(function (ui) {
        html += ui.toHtmlString(indent);
    });
    return html;
};

