define([
	'jquery',
	'backbone',
	'view/main_view'
], function($, Backbone, HomeView){

	var HomeShow = function(){
		var homeView = new HomeView();		
		
		$('#app_view').html(homeView.render().el);
	};

	return HomeShow;
});
