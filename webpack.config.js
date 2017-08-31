const path = require('path');
const BUILD_PATH = path.resolve(__dirname, 'build');
//--------------------------------------------------------------------------------
const typescript = require('./tasks/typescript');
const scss = require('./tasks/scss');
const htmlcopy = require('./tasks/htmlcopy');

typescript.output.path = BUILD_PATH;
scss.output.path = BUILD_PATH;
htmlcopy.output.path = BUILD_PATH;

module.exports = [htmlcopy, scss, typescript];