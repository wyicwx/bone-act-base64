// dependencies
var fs = require("fs");
var postcss = require("postcss");
var url = require("postcss-url");

exports.act = function(buffer, encoding, callback) {
    var bone = this.bone;
    var options = this.options({
        url: 'inline',
        maxSize: 10
    });
    var css = buffer.toString();

    this.cacheable();

    postcss([ url(options) ]).process(css, {
        from: this.source,
        to: this.destination
    }).then(function (result) {
        result.warnings().forEach(function (warn) {
            bone.log.warn('bone-act-base64', warn.toString());
        });
        callback(null, result.css);
    });
};

exports.filter = {
    ext: '.css'
};