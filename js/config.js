//配置URL
requirejs.config({
    baseUrl: 'js/',
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'handlebars': 'lib/handlebars-v1.3.0',
        'router': 'lib/router',
        'require': 'lib/require'
    },
    shim: {
    	backbone: {
    		'deps': ['jquery', 'underscore'],
    		'exports': 'Backbone'
    	},
    	underscore: {
    		'exports': '_'
    	},
        handlebars: {
            exports: 'Handlebars',
            init: function() {
                this.Handlebars = Handlebars;
                return this.Handlebars;
            }
        }
    }
});