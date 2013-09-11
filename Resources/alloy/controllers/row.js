function Controller() {
    function rowClick1() {
        alert($.image1.image);
    }
    function rowClick2() {
        alert($.image2.image);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        width: "auto",
        height: "130dp",
        layout: "horizontal",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.row.add($.__views.title);
    $.__views.image1 = Ti.UI.createImageView({
        width: "100dp",
        height: "100dp",
        top: "15dp",
        left: "40dp",
        id: "image1",
        image: "/image1.jpg"
    });
    $.__views.row.add($.__views.image1);
    rowClick1 ? $.__views.image1.addEventListener("click", rowClick1) : __defers["$.__views.image1!click!rowClick1"] = true;
    $.__views.image2 = Ti.UI.createImageView({
        width: "100dp",
        height: "100dp",
        top: "15dp",
        left: "40dp",
        id: "image2",
        image: "/image1.jpg"
    });
    $.__views.row.add($.__views.image2);
    rowClick2 ? $.__views.image2.addEventListener("click", rowClick2) : __defers["$.__views.image2!click!rowClick2"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.backgroundColor = args.bgcolor ? "#faf8f5" : "#eee4db";
    $.image1.image = "/image" + args.id1 + ".jpg";
    $.image2.image = "/image" + args.id2 + ".jpg";
    __defers["$.__views.image1!click!rowClick1"] && $.__views.image1.addEventListener("click", rowClick1);
    __defers["$.__views.image2!click!rowClick2"] && $.__views.image2.addEventListener("click", rowClick2);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;