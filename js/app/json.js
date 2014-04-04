define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	var Todo = function(){
		var Book = Backbone.Model.extend({
			default: {
				name: ''
			}
		});
	
		var models = [{
			name: 'one'
		},{
			name: 'two'
		},{
			name: 'three'
		}];
		
		// var Booklist = Backbone.Collection.extend({
		// 	model: Book
		// });
		// var books = new Booklist(models);
		// 集合也可以这样定义
		var books = new Backbone.Collection(models, {
			model: Book
		})

		console.log(books.models[0].get("name"));
		// 等价于
		// console.log(books.models[0].attributes.name);
	};
	return Todo;
});
