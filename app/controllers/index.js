var data = new Array();
for (var i=0; i<5; i++) {
   	var bgcolor = (i % 2 == 1) ? true : false;
    var row = Alloy.createController("row",{
       id1: 2*i + 1,
       id2: 2*i + 2,
       bgcolor: bgcolor
    }).getView();
    data.push(row);
}

$.gallaryTable1.setData(data);
$.index.open();