module.exports = function(grunt) {
	// Project configuration.  
	grunt.initConfig({  
		pkg: grunt.file.readJSON('package.json'),  
		uglify: {  
			options: {  
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'  
			},  
			build: {  
				src: 'js/app/*.js',  
				// dest: 'js/app/<%= pkg.name %>.min.js'
				dest: 'release/js/app/app.min.js'  
			}  
		},
		handlebars: {
			options: {
				namespace: function(filename) {
					var names = filename.replace(/js\/(.*)(\/\w+\.hbs)/, '$1');
					return names.split('/').join('.');
				},
				files: {
					'js/**/*.js' : [ 'js/**/*.hbs']
				}
			},
			build: {
				src: 'js/layout/main.hbs',
				dest: 'js/layout/main.hbs.js'
			}
		}
	});  

	// Load the plugin that provides the "uglify" task.  
	grunt.loadNpmTasks('grunt-contrib-uglify');  
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	// Default task(s).  
	// grunt.registerTask('build', ['uglify', 'handlebars']);
	grunt.registerTask('default', ['uglify', 'handlebars']);
};
