define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	var Collection5 = function(){
		// 们常常使用数组的sort()方法对元素进行排序，Underscore也提供了sortBy()方法实现更为复杂的集合排序。
		// 但在Backbone的集合对象中，为我们提供了集合元素的实时排序，当任何模型对象被插入到集合中时，都会按照预定的排序规则放到对应的位置。

		// 定义模型类  
		var Book = Backbone.Model.extend({  
		    defaults : {  
		        name : '',  
		        price : 0  
		    }  
		});  
		  
		// 创建集合对象  
		var books = new Backbone.Collection(null, {  
		    model : Book,  
		    comparator : function(m1, m2) {  
		        var price1 = m1.get('price');  
		        var price2 = m2.get('price');  
		  
		        if(price1 > price2) {  
		            return 1;  
		        } else {  
		            return 0;  
		        }  
		    }  
		});  
		  
		books.add({  
		    name : '构建高性能Web站点',  
		    price : 11 
		});  
		  
		books.push({  
		    name : '深入分析Java Web技术内幕',  
		    price : 10
		});  
		  
		books.unshift({  
		    name : '编写高质量代码:Web前端开发修炼之道',  
		    price : 3 
		});  
		  
		books.push({  
		    name : '基于MVC的JavaScript Web富应用开发',  
		    price : 4
		}, {  
		    at : 1  
		});  
		  
		books.unshift({  
		    name : 'RESTful Web Services Cookbook中文版',  
		    price : 5
		  
		}, {  
		    at : 2  
		});  
		  
		// 在控制台输出集合中的模型列表
		console.log(books.models);

		for(var i=0,len=books.models.length; i<len; i++){
			console.log(books.models[i].attributes);
		}
	};
	return Collection5;
});
