define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	var Collection3 = function(){
		// 集合类提供了3个方法用于从集合中移除模型对象，分别是：
		 
		// remove()：从集合中移除一个或多个指定的模型对象
		// pop()：移除集合尾部的一个模型对象
		// shift()：移除集合头部的一个模型对象

		// 定义模型类  
		var Book = Backbone.Model.extend({  
		    defaults : {  
		        name : '',  
		        price : 0  
		    }  
		});  
		  
		// 定义初始化数据  
		var data = [{  
		    name : '构建高性能Web站点',  
		    price : 56.30  
		}, {  
		    name : '深入分析Java Web技术内幕',  
		    price : 51.80  
		}, {  
		    name : '编写高质量代码:Web前端开发修炼之道',  
		    price : 36.80  
		}, {  
		    name : '基于MVC的JavaScript Web富应用开发',  
		    price : 42.50  
		}, {  
		    name : 'RESTful Web Services Cookbook中文版',  
		    price : 44.30  
		  
		}]  
		  
		// 创建集合对象  
		var books = new Backbone.Collection(data, {  
		    model : Book  
		});  
		  
		books.remove(books.models[2]);  
		books.pop();  
		books.shift();  
		  
		// 在控制台输出集合中的模型列表  
		console.dir(books.models); 
	};
	return Collection3;
});
