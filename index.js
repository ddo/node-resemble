const canvas = require('canvas');
const imageType = require('image-type');

function overrideWindow() {
  const doc = {};
  doc.createElement = function (tag) {
    return (tag !== 'canvas')
      ? false
      : new canvas;
  };
  return {
    document: doc
  }
}

function overrideFileReader() {
  const FileReader = function () { };
  FileReader.prototype.readAsDataURL = function (buffer) {
    this.onload({
      target: {
        result: 'data:image/' + imageType(buffer) + ';base64,' + buffer.toString('base64')
      }
    });
  };
  return FileReader;
}

function overrideImage() {
  const Image = canvas.Image;
  Image.prototype.setAttribute = function () { };
  return Image;
}

module.exports = function () {
  if (typeof window === "undefined"){
    global.window = overrideWindow()
  }
  if (typeof FileReader === "undefined"){
    global.FileReader = overrideFileReader()
  }
  if (typeof Image === "undefined"){
    global.Image = overrideImage()
  }
  const resemblejs = require('resemblejs');
  return resemblejs.apply(this, arguments);
};
