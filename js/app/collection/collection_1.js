define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	var Collection1 = function(){
		// 定义模型类  
		var Book = Backbone.Model.extend({  
		    defaults : {  
		        name : '',  
		        price : 0  
		    }  
		});  
		  
		// 创建集合对象  
		var books = new Backbone.Collection(null, {  
		    model : Book  
		});  
		  
		books.add({  
		    name : '构建高性能Web站点',  
		    price : 56.30  
		});  
		  
		books.push({  
		    name : '深入分析Java Web技术内幕',  
		    price : 51.80  
		});  
		  
		books.unshift({  
		    name : '编写高质量代码:Web前端开发修炼之道',  
		    price : 36.80  
		});  
		  
		books.push({  
		    name : '基于MVC的JavaScript Web富应用开发',  
		    price : 42.50  
		}, {  
		    at : 1  
		});  
		  
		books.unshift({  
		    name : 'RESTful Web Services Cookbook中文版',  
		    price : 44.30  
		  
		}, {  
		    at : 2  
		});  
		  
		// 在控制台输出集合中的模型列表  
		console.dir(books.models);
	};
	return Collection1;
});
