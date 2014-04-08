//配置URL
requirejs.config({
    baseUrl: 'js/',
    paths: {
        'jquery':     '../bower_components/lib/jquery',
        'underscore': '../bower_components/lib/underscore',
        'backbone':   '../bower_components/lib/backbone',
        'handlebars': '../bower_components/lib/handlebars',
        'router':     'lib/router',
        'require':    '../bower_components/lib/require'
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