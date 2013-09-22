function Controller() {
    function doClick() {
        alert("fuck!");
    }
    function toRed() {
        $.content_view1.visible = "true";
        $.content_view2.visible = "false";
        $.content_view3.visible = "false";
    }
    function toGreen() {
        $.content_view1.visible = "false";
        $.content_view2.visible = "true";
        $.content_view3.visible = "false";
    }
    function toWhite() {
        $.content_view1.visible = "false";
        $.content_view2.visible = "false";
        $.content_view3.visible = "true";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.content_view1 = Ti.UI.createView({
        id: "content_view1",
        borderRadius: "10",
        backgroundColor: "red",
        visible: "true"
    });
    $.__views.index.add($.__views.content_view1);
    $.__views.label = Ti.UI.createLabel({
        color: "white",
        top: 50,
        text: "Hello, World!",
        id: "label"
    });
    $.__views.content_view1.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.content_view2 = Ti.UI.createView({
        id: "content_view2",
        borderRadius: "10",
        backgroundColor: "green",
        visible: "false"
    });
    $.__views.index.add($.__views.content_view2);
    $.__views.label = Ti.UI.createLabel({
        color: "white",
        top: 50,
        text: "Hello, World!!",
        id: "label"
    });
    $.__views.content_view2.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.content_view3 = Ti.UI.createView({
        id: "content_view3",
        borderRadius: "10",
        backgroundColor: "white",
        visible: "false"
    });
    $.__views.index.add($.__views.content_view3);
    $.__views.label = Ti.UI.createLabel({
        color: "white",
        top: 50,
        text: "Hello, World!!!",
        id: "label"
    });
    $.__views.content_view3.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.button_view = Ti.UI.createView({
        id: "button_view",
        borderRadius: "10",
        backgroundColor: "blue",
        height: "70",
        bottom: "0"
    });
    $.__views.index.add($.__views.button_view);
    $.__views.button1 = Ti.UI.createButton({
        left: 30,
        bottom: 5,
        title: "RED",
        id: "button1"
    });
    $.__views.button_view.add($.__views.button1);
    toRed ? $.__views.button1.addEventListener("click", toRed) : __defers["$.__views.button1!click!toRed"] = true;
    $.__views.button2 = Ti.UI.createButton({
        left: 130,
        bottom: 5,
        title: "GREEN",
        id: "button2"
    });
    $.__views.button_view.add($.__views.button2);
    toGreen ? $.__views.button2.addEventListener("click", toGreen) : __defers["$.__views.button2!click!toGreen"] = true;
    $.__views.button3 = Ti.UI.createButton({
        left: 230,
        bottom: 5,
        title: "WHITE",
        id: "button3"
    });
    $.__views.button_view.add($.__views.button3);
    toWhite ? $.__views.button3.addEventListener("click", toWhite) : __defers["$.__views.button3!click!toWhite"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.button1!click!toRed"] && $.__views.button1.addEventListener("click", toRed);
    __defers["$.__views.button2!click!toGreen"] && $.__views.button2.addEventListener("click", toGreen);
    __defers["$.__views.button3!click!toWhite"] && $.__views.button3.addEventListener("click", toWhite);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;