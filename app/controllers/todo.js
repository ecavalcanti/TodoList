var moment = require('alloy/moment');

var todoCollection = Alloy.Collections.todos;

function filterTodo(collection) {
    return collection.where({done:0});
}

function showAdd(){
	var controller = Alloy.createController('add');
	controller.getView().open();
}

function done(e){
	var todo = todoCollection.get(e.rowData.modeId);
	todo.set({
		done:1,
		done_date:moment().format('YYYY-MM-DD HH:mm')
	});
	todo.save();
	
	todoCollection.fetch();
}
