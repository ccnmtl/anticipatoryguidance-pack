/* global jQuery: true */

require('!file-loader?name=[name].[ext]!../static/index.html');
import './static.js';

// load and apply css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/common.css';
import '../static/css/imagemapchart.css';

var jQuery = require('jquery');
var module = require('imagemapchart/src/index.js');

jQuery(document).ready(function() {
    module.ImageMapChartApp.initialize({
        el: jQuery('.infographic'),
        template: require('../static/templates/page.html'),
        items: require('../static/json/items.json')
    });
});
