define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	var Collection6 = function(){
		// Collection也提供了两个与服务器进行交互的方法：
		// fetch()：用于从服务器接口获取集合的初始化数据，覆盖或追加到集合列表中
		// create()：在集合中创建一个新的模型，并将其同步到服务器

		// 定义模型类  
		var Book = Backbone.Model.extend({  
		    defaults : {  
		        name : '',  
		        price : 0  
		    }  
		});  

		// var book = new Book();

		// book.fetch({
		// 	url: '/index.json',
		// 	success: function(resp){
		// 		// resp is object
		// 		console.log(resp.attributes[0].name);
		// 	}
		// });
		  
		// 定义集合类  
		var BookList = Backbone.Collection.extend({  
		    model : Book,  
		    url : '/index.json'  
		});  
		  
		// 创建集合对象, 并从服务器同步初始化数据  
		var books = new BookList();  
		books.fetch({  
		    success: function(collection, resp) {
				for(var i=0,len=collection.models.length; i<len; i++){
					console.log(collection.models[i].attributes);
				}
		        // 同步成功后在控制台输出集合中的模型列表  
		        // console.dir(collection.models);  
		    }  
		});

		books.add({  
		    id : 1000,  
		    name : 'Thinking in Java',  
		    price : 395.70  
		});  
		  
		books.fetch({  
		    add: true,  
		    success : function(collection, resp) {  
		        // 同步成功后在控制台输出集合中的模型列表  
		        console.dir(collection.models);  
		    }  
		});
	};
	return Collection6;
});
