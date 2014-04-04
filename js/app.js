require([
    'jquery',
	'backbone',
    'router',
    'require'
],function($, Backbone, router, require){
	
	//homepage
	router.on('route:main', function(){
		require(['app/main'], function(HomeShow){
			HomeShow();
		});
	});

	//collection 集合
	router.on('route:collection', function(){
		require(['app/collection'], function(CollectionShow){
			CollectionShow();
		});
	});

	//prompt
	router.on('route:prompt', function(){
		require(['app/prompt'], function(PromptView){
			PromptView();
		});
	});

	//prompt
	router.on('route:json', function(){
		require(['app/json'], function(Json){
			Json();
		});
	});


	//todo
	router.on('route:todo', function(){
		require(['app/todo'], function(Todo){
			Todo();
		});
	});

    //开启路由监听
    Backbone.history.start();
});
