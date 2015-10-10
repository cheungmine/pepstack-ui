
/**
 * accordion.js
 * 2015-10-10
 */

/**
 * AccordionPanel
 */
var AccordionPanel = function (id, panelContent) {
    this._init(id);
};

AccordionPanel.TYPE_STRING = "[pepstackUI.AccordionPanel]";

AccordionPanel.prototype._init = function () {

};


// public:
//
AccordionPanel.prototype.typeString = function () {
    return AccordionPanel.TYPE_STRING;
};


AccordionPanel.prototype.toJsonString = function (indent) {
    if (indent === undefined) {
        indent = '';
    }

    var json = "";
    return json;
};


AccordionPanel.prototype.toHtmlString = function (indent) {
    if (indent === undefined) {
        indent = '';
    }

    var html = "";

    return html;
};


/**
 * Accordion
 */
var Accordion = function (divId, style) {
    this._init(divId, style);
};

Accordion.TYPE_STRING = "[pepstackUI.Accordion]";

Accordion.prototype._init = function (divId, style) {
    //this.class = "accordion-style1 panel-group";
    this.divId = divId;

    this.panelGroup = new UIGroup();
};


// public:
//
Accordion.prototype.typeString = function () {
    return Accordion.TYPE_STRING;
};


Accordion.prototype.toJsonString = function (indent) {
    return this.panelGroup.toJsonString(indent);
};


Accordion.prototype.toHtmlString = function (indent) {
    return this.panelGroup.toHtmlString(indent);
};


Accordion.prototype.addPanel = function (panel) {
    this.panelGroup.addUI(panel);
};
