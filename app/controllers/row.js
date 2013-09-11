var args = arguments[0] || {};
$.row.backgroundColor = args.bgcolor ? "#faf8f5" : "#eee4db";
//$.title.text = "Album" + args.id;
$.image1.image = "/image" + args.id1 + ".jpg";
$.image2.image = "/image" + args.id2 + ".jpg";

function rowClick1(e) {
	alert($.image1.image);
}

function rowClick2(e) {
	alert($.image2.image);
}