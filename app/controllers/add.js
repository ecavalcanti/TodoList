function add(){
	var todo = Alloy.createModel("todo", {
		text:$.todoTextField.value
	});
	
	todo.save();
	
	Alloy.Collections.todos.fetch();
	
	$.win.close();
	
}

function cancel(){
	$.win.close();
}
