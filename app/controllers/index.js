function doClick() {
	alert("fuck!");
}

function toRed(){
	$.content_view1.visible="true";
	$.content_view2.visible="false";
	$.content_view3.visible="false";
}

function toGreen(){
	$.content_view1.visible="false";
	$.content_view2.visible="true";
	$.content_view3.visible="false";
}

function toWhite(){
	$.content_view1.visible="false";
	$.content_view2.visible="false";
	$.content_view3.visible="true";
}

$.index.open();