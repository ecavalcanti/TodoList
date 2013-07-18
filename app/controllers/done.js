var moment = require('alloy/moment');
var todoCollection = Alloy.Collections.todos;

function filterDone(collection) {
    return collection.where({done:1});
}

function showDetails(e) {
	var done = todoCollection.get(e.rowData.modeId);
	alert("Done at: " + moment(done.get('done_date'), 'YYYY-MM-DD HH:mm').format("DD/MM/YYYY HH:mm"));
	
}
