define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	var Collection4 = function(){
		// Collection定义了一系列用于快速从集合中查找我们想要的模型的方法，包括：
		 
		// get()：根据模型的唯一标识（id）查找模型对象
		// getByCid()：根据模型的cid查找模型对象
		// at()：查找集合中指定位置的模型对象
		// where()：根据数据对集合的模型进行筛选

		// 前面前面一片介绍数据模型时我们提到，每个模型对象都有一个唯一标识（id），
		// 它与数据库中记录的id保持同步。实际上，每个模型对象内部还会自动创建一个cid，
		// 它用来标识每一个模型（请注意将id和cid区分开，它们没有任何关系）。
		// 集合对象提供了两个方法用于根据id和cid来查找模型对象，分别是get()方法和getByCid()方法，例如：


		// 定义模型类  
		var Book = Backbone.Model.extend({  
		    defaults : {  
		        name : '',  
		        price : 0  
		    }  
		});  
		  
		// 定义初始化数据  
		var data = [{  
		    id : 1001,  
		    name : '构建高性能Web站点',  
		    price : 56.30  
		}, {  
		    id : 1002,  
		    name : '深入分析Java Web技术内幕',  
		    price : 51.80  
		}, {  
		    id : 1003,  
		    name : '编写高质量代码:Web前端开发修炼之道',  
		    price : 36.80  
		}, {  
		    id : 1004,  
		    name : '基于MVC的JavaScript Web富应用开发',  
		    price : 42.50  
		}, {  
		    id : 1005,  
		    name : 'RESTful Web Services Cookbook中文版',  
		    price : 44.30  
		}]  
		  
		// 创建集合对象  
		var books = new Backbone.Collection(data, {  
		    model : Book  
		});  
		  
		// 根据id和cid查找模型对象  
		var book1 = books.get(1001);  
		// var book2 = books.getByCid(1);
		var book3 = books.at(0);
		var book4 = books.where({  
		    price : 51.80  
		});
		// where()方法用于给定一个或多个数据，查找并返回集合中匹配数据的模型。该方法返回一个数组，因此能够包含一个或多个结果
		  
		// 在控制台输出模型  
		console.dir(book1.attributes);  
		// console.dir(book2);  
		console.dir(book3.attributes); 
		console.dir(book4[0].attributes); 
	};
	return Collection4;
});
