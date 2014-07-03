var resemblejs = require('resemblejs');
var canvas     = require('canvas');
var imageType  = require('image-type');

module.exports = function() {
    //override FileReader
    this.FileReader = function(){};
    this.FileReader.prototype.readAsDataURL = function(buffer) {
        this.onload({
            target: {
                result: 'data:image/' + imageType(buffer) + ';base64,' + buffer.toString('base64')
            }
        });
    };

    //override Image
    this.Image = canvas.Image;
    this.Image.prototype.setAttribute = function() {};

    //override document.createElement('canvas')
    this.document = {
        createElement: function(tag) {
            if(tag !== 'canvas') {
                return false;
            }

            return new canvas;
        }
    };

    return resemblejs.resemble.apply(this, arguments);
};