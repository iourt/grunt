define([
	'jquery',
	'backbone',
	'layout/main.hbs'
], function($, Backbone, homeTemp){
	//var HomeView = Backbone.View.extend({
	//	template: mainTmp,
	//
	//	render: function(renderData){
	//		var $elem = this.template(renderData);
	//		this.setElement($elem);
	//		return this;
	//	}
	//});


	var HomeShow = function(){
		var HomeView = Backbone.View.extend({

			template: homeTemp,

			render: function(){
				var $elem = this.template();
				this.setElement($elem);
				return this;
			}
		});
		
		var homeView = new HomeView();		
		
		$('#app_view').html(homeView.render().el);	
		//$('#app_view').html('<ul><li><a href=#main>Homepage</a></li><li><a href=#prompt>Prompt</a></li><li><a href=#json>JSON</a></li><li><a href=#todo>ToDO</a></li></ul>');
	};

	return HomeShow;
});
