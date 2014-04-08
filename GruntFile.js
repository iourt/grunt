module.exports = function(grunt) {

	// 自定义一些初始配置
	grunt.appueConfig = {
		// 多少项目目录
		projects = ['prj-test'],
		// 产品目录，执行压缩等等后生成的目录
		products = "release"
	};

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
				namespace: false,
				amd: true
			},
			build: {
				src: "js/layout/main.hbs",
				dest: "js/layout/main.hbs.js"
			}
	    }
	});  


    // bower all project
    register_one("bower-all", ["bower"]);

    // register(a, [b, c]) => a:prj = b:prj + c:prj
    function register(name, tasks) {
        grunt.appueConfig.projects.forEach(function(proj) {
            var t = tasks.map(function(task){
            	return task + ":" + proj;
            });
            grunt.registerTask(name + ':' + proj, t);
        });
    }

    // register_one(a, [b, c]) => a = b:prj1 + c:prj1 + b:prj2 + c:prj2
    function register_one(name, tasks) {
        var ts = [];
        grunt.appueConfig.projects.forEach(function(proj) {
            tasks.forEach(function(task){
                ts.push(task + ":" + proj);
            });
        });

        grunt.registerTask(name, ts);
    }


    grunt.registerTask("bower", "run bower install", function(prj) {
        if (prj && grunt.file.exists(prj)) {
            grunt.task.run("run-shell:node_modules/bower/bin/bower:update+--allow-root:" + prj);
        } else {
            grunt.log.oklns("No project " + prj + " found ...");
        }
    });



	// Load the plugin that provides the "uglify" task.  
	grunt.loadNpmTasks('grunt-contrib-uglify');  
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	// Default task(s).  
	// grunt.registerTask('build', ['uglify', 'handlebars']);
	grunt.registerTask('default', ['uglify', 'handlebars']);
};
