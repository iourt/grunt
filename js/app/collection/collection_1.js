define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	var Collection1 = function(){

		// 集合提供了3个方法允许我们动态地向集合中动态插入模型：

		// add()：向集合中的指定位置插入模型，如果没有指定位置，默认追加到集合尾部
		// push()：将模型追加到集合尾部（与add方法的实现相同）
		// unshift()：将模型插入到集合头部

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
		console.log(books.models);

		
	};
	return Collection1;
});
