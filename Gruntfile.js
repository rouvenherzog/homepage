module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			go: {
				options: {},
				files: {
					'dest/rouvenherzog.css': 'src/styles/*.less'
				}
			}
		},

		jade: {
			options: {
				data: {
					debug: false
				}
			},
			files: {
				cwd: 'src/templates/',
				expand: true,
				src: '**/*.jade',
				dest: 'dest/',
				ext: '.html'
			}
		},

		watch: {
			development: {
				files: ['src/**/*'],
				tasks: ['less', 'jade']
			}
		}
	})


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jade');
};