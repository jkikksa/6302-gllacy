module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.initConfig({
    watch: {
      html_watch: {
        files: ['src/index.html', "src/catalog.html"],
        tasks: ['copy'],
      }
    },
    copy: {
      html_copy: {
        files: {
          'index.html': ['src/index.html'],
          'catalog.html': ['src/catalog.html']
        }
      },
    },
  })
};
