goog.provide('kstatic.components.image');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('goog.style');
goog.require('kstatic.component');

/**
 * Image module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.image = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.imgSrcs = [];
  this.type = 'cover';
};

goog.inherits(kstatic.components.image, kstatic.component);
goog.exportSymbol('kstatic.components.image', kstatic.components.image);

kstatic.components.image.prototype.start = function() {
  var self = this;
  self.setImgSrcs();
  self.attachEvents();
  self.setImage();
};

kstatic.components.image.prototype.setImgSrcs = function() {
  var self = this;
  self.imgSrcs = goog.dom.dataset.get(self.node, 'srcset').split(',');
};

kstatic.components.image.prototype.attachEvents = function() {
  var self = this;

  self.pubsub.subscribe('window:resize', function() {
    self.setImage();
  });

  self.pubsub.subscribe('image:refreshSrcset', function() {
    self.setImgSrcs();
    self.setImage();
  });
};

kstatic.components.image.prototype.setImage = function() {
  var self = this;
  self.node.style.backgroundImage = 'url(' + self.getResponsiveImgUrl() + ')';
};

kstatic.components.image.prototype.getResponsiveImgUrl = function() {
  var self = this;
  var selfSize = goog.style.getSize(self.node).height;
  if (goog.dom.classlist.contains(self.node, 'width')) {
    selfSize = goog.style.getSize(self.node).width;
  }
  var key = 0;
  for (var i = 0; i <= self.imgSizes.length; i++) {
    if (self.imgSizes[i] < selfSize) {
      // set size - 1 to provide an image in better quality than current size.
      key = i + 1;
    }
  }
  if (key >= self.imgSizes.length) {
    key = self.imgSizes.length - 1;
  }
  return self.imgSrcs[key];
};
