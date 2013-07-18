exports.definition = {
	config: {
		columns: {
		    "text": "TEXT",
		    "done": "INTEGER",
		    "done_date": "TEXT"
		},
		"defaults": {
            "done": 0
        },		
		adapter: {
			type: "sql",
			collection_name: "todos"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

