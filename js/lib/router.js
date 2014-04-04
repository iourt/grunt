define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    console.log('router');
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'main',
			'main': 'main',
            'collection': 'collection',
			'prompt': 'prompt',
			'json': 'json',
			'todo': 'todo'
        }
    });
    console.log('router_end');
    var appRouter = new AppRouter();
    return appRouter;
});
