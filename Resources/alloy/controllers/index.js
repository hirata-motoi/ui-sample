function Controller() {
    function doClick() {
        alert("fuck!");
    }
    function changeView1() {
        changeView(1);
    }
    function changeView2() {
        changeView(2);
    }
    function changeView3() {
        changeView(3);
    }
    function changeView(num) {
        var winNum = new Array(4);
        var buttonSize = new Array(4);
        for (var i = 1; 4 > i; i++) if (i == num) {
            winNum[i] = "true";
            buttonSize[i] = "60";
        } else {
            winNum[i] = "flase";
            buttonSize[i] = "50";
        }
        $.content_view1.visible = winNum[1];
        $.content_view2.visible = winNum[2];
        $.content_view3.visible = winNum[3];
        $.button1.height = buttonSize[1];
        $.button1.width = buttonSize[1];
        $.button2.height = buttonSize[2];
        $.button2.width = buttonSize[2];
        $.button3.height = buttonSize[3];
        $.button3.width = buttonSize[3];
        adjustSpace();
    }
    function adjustSpace() {
        var viewWidth = Titanium.Platform.displayCaps.platformWidth;
        var centerPoint = new Array(4);
        for (var i = 1; 4 > i; i++) centerPoint[i] = viewWidth * i / 4;
        $.button1.left = centerPoint[1] - $.button1.width / 2;
        $.button2.left = centerPoint[2] - $.button2.width / 2;
        $.button3.left = centerPoint[3] - $.button3.width / 2;
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
        backgroundColor: "white",
        backgroundImage: "/image1.jpg",
        visible: "true",
        bottom: "60",
        id: "content_view1"
    });
    $.__views.index.add($.__views.content_view1);
    $.__views.tag_table = Ti.UI.createView({
        height: "100",
        bottom: "0",
        backgroundImage: "/tag_table_back.png",
        id: "tag_table"
    });
    $.__views.content_view1.add($.__views.tag_table);
    $.__views.tag1 = Ti.UI.createButton({
        left: "10",
        title: "TAB1",
        id: "tag1"
    });
    $.__views.tag_table.add($.__views.tag1);
    $.__views.tag2 = Ti.UI.createButton({
        left: "90",
        title: "TAB2",
        id: "tag2"
    });
    $.__views.tag_table.add($.__views.tag2);
    $.__views.tag3 = Ti.UI.createButton({
        left: "170",
        title: "TAB3",
        id: "tag3"
    });
    $.__views.tag_table.add($.__views.tag3);
    $.__views.close_tag = Ti.UI.createButton({
        left: "240",
        title: "CLOSE",
        id: "close_tag"
    });
    $.__views.tag_table.add($.__views.close_tag);
    $.__views.content_view2 = Ti.UI.createView({
        backgroundColor: "white",
        backgroundImage: "/image2.jpg",
        visible: "false",
        bottom: "60",
        id: "content_view2"
    });
    $.__views.index.add($.__views.content_view2);
    $.__views.label = Ti.UI.createLabel({
        text: "Hello, World!!",
        id: "label"
    });
    $.__views.content_view2.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.content_view3 = Ti.UI.createView({
        backgroundColor: "white",
        backgroundImage: "/image3.jpg",
        visible: "false",
        bottom: "60",
        id: "content_view3"
    });
    $.__views.index.add($.__views.content_view3);
    $.__views.label = Ti.UI.createLabel({
        text: "Hello, World!!!",
        id: "label"
    });
    $.__views.content_view3.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.button_view = Ti.UI.createView({
        backgroundColor: "white",
        height: "60",
        bottom: "0",
        id: "button_view"
    });
    $.__views.index.add($.__views.button_view);
    $.__views.button1 = Ti.UI.createButton({
        backgroundImage: "/image1.jpg",
        id: "button1"
    });
    $.__views.button_view.add($.__views.button1);
    changeView1 ? $.__views.button1.addEventListener("click", changeView1) : __defers["$.__views.button1!click!changeView1"] = true;
    $.__views.button2 = Ti.UI.createButton({
        backgroundImage: "/image2.jpg",
        id: "button2"
    });
    $.__views.button_view.add($.__views.button2);
    changeView2 ? $.__views.button2.addEventListener("click", changeView2) : __defers["$.__views.button2!click!changeView2"] = true;
    $.__views.button3 = Ti.UI.createButton({
        backgroundImage: "/image3.jpg",
        id: "button3"
    });
    $.__views.button_view.add($.__views.button3);
    changeView3 ? $.__views.button3.addEventListener("click", changeView3) : __defers["$.__views.button3!click!changeView3"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animation = require("alloy/animation");
    changeView1();
    adjustSpace();
    animation.fadeOut($.tag_table, 0);
    var IsTagTableVisible = 0;
    var fadeInTagView = function() {
        if (0 == IsTagTableVisible) {
            animation.fadeIn($.tag_table, 500);
            $.content_view1.removeEventListener("click", fadeInTagView);
            IsTagTableVisible = 1;
        } else IsTagTableVisible = 0;
    };
    var fadeOutTagView = function() {
        animation.fadeOut($.tag_table, 500);
        $.content_view1.addEventListener("click", fadeInTagView);
    };
    $.content_view1.addEventListener("click", fadeInTagView);
    $.close_tag.addEventListener("click", fadeOutTagView);
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.button1!click!changeView1"] && $.__views.button1.addEventListener("click", changeView1);
    __defers["$.__views.button2!click!changeView2"] && $.__views.button2.addEventListener("click", changeView2);
    __defers["$.__views.button3!click!changeView3"] && $.__views.button3.addEventListener("click", changeView3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;