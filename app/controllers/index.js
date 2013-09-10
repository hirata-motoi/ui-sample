var data = new Array();
for (var i=0; i<5; i++) {
   	var bgcolor = (i % 2 == 1) ? true : false;
    var row = Alloy.createController("row",{
       id: i+1,
       bgcolor: bgcolor
    }).getView();
    data.push(row);
}
$.gallaryTable.setData(data);
$.index.open();