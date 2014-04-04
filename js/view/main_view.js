define([
	'jquery',
	'backbone',
	'layout/main.hbs'
], function($, Backbone, homeTemp){

	var HomeView = Backbone.View.extend({
		template: homeTemp,
        initialize: function() {
        },
        render: function() {
            this.setElement( this.template );
            return this;
        }
	});

	return HomeView;
});
