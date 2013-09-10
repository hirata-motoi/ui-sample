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
    $.__views.__alloyId2 = Ti.UI.createWindow({
        title: "gallary",
        id: "__alloyId2"
    });
    $.__views.gallaryTable = Ti.UI.createTableView({
        id: "gallaryTable"
    });
    $.__views.__alloyId2.add($.__views.gallaryTable);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "gallary",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId4 = Ti.UI.createWindow({
        title: "camera",
        id: "__alloyId4"
    });
    $.__views.__alloyId3 = Ti.UI.createTab({
        window: $.__views.__alloyId4,
        title: "camera",
        id: "__alloyId3"
    });
    $.__views.index.addTab($.__views.__alloyId3);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = new Array();
    for (var i = 0; 5 > i; i++) {
        var bgcolor = 1 == i % 2 ? true : false;
        var row = Alloy.createController("row", {
            id: i + 1,
            bgcolor: bgcolor
        }).getView();
        data.push(row);
    }
    $.gallaryTable.setData(data);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;