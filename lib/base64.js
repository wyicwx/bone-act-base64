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
    var runtime = this;

    this.cacheable();

    postcss([ url(options) ]).process(css, {
        from: this.source,
        to: this.destination
    }).then((result) => {
        result.messages.forEach((item) => {
            if (item.type == 'dependency') {
                runtime.addDependency(item.file);
            }
        });
        callback(null, result.css);
    });
};

exports.filter = {
    ext: '.css'
};