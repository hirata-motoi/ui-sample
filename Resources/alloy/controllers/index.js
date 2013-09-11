function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.gallaryWin = Ti.UI.createWindow({
        id: "gallaryWin"
    });
    $.__views.gallaryTable1 = Ti.UI.createTableView({
        height: Ti.UI.SIZE,
        width: "auto",
        layout: "horizontal",
        id: "gallaryTable1"
    });
    $.__views.gallaryWin.add($.__views.gallaryTable1);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.gallaryWin,
        title: "gallaryTab",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId3 = Ti.UI.createWindow({
        title: "cameraWin",
        id: "__alloyId3"
    });
    $.__views.__alloyId2 = Ti.UI.createTab({
        window: $.__views.__alloyId3,
        title: "cameraTab",
        id: "__alloyId2"
    });
    $.__views.index.addTab($.__views.__alloyId2);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = new Array();
    for (var i = 0; 5 > i; i++) {
        var bgcolor = 1 == i % 2 ? true : false;
        var row = Alloy.createController("row", {
            id1: 2 * i + 1,
            id2: 2 * i + 2,
            bgcolor: bgcolor
        }).getView();
        data.push(row);
    }
    $.gallaryTable1.setData(data);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;