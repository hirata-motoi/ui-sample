var animation = require('alloy/animation');

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
	for (var i = 1; i < 4; i++) {
		if(i == num) {
			winNum[i] = "true";
			buttonSize[i] = "60";
		} else {
			winNum[i] = "flase";
			buttonSize[i] = "50";
		}
	}
	$.content_view1.visible=winNum[1];
	$.content_view2.visible=winNum[2];
	$.content_view3.visible=winNum[3];
	
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
	for(var i = 1; i < 4; i++) {
		centerPoint[i] = viewWidth*i/4;
	}
	$.button1.left = centerPoint[1] - $.button1.width/2;
	$.button2.left = centerPoint[2] - $.button2.width/2;
	$.button3.left = centerPoint[3] - $.button3.width/2;
}

changeView1();
adjustSpace();


animation.fadeOut($.tag_table, 0);
var IsTagTableVisible = 0;
var fadeInTagView = function(){
	if(IsTagTableVisible == 0) {
	 	animation.fadeIn($.tag_table, 500);
		$.content_view1.removeEventListener('click', fadeInTagView);
		IsTagTableVisible = 1;
	} else {
		IsTagTableVisible = 0;
	}
};
var fadeOutTagView = function(){
	animation.fadeOut($.tag_table, 500);
	$.content_view1.addEventListener('click', fadeInTagView);
};

$.content_view1.addEventListener('click', fadeInTagView);
$.close_tag.addEventListener('click', fadeOutTagView);

$.index.open();