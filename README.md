# To Setup
- npm install

# Examples
To remove build directory
- ./node_modules/.bin/gulp clean

To Uglify JavaScripts with sourcemaps
- ./node_modules/.bin/gulp minJS

To Test minified JavaScript bundle with Karma and Qunit in PhantomJS
- ./node_modules/.bin/gulp minJS
- ./node_modules/.bin/gulp test
