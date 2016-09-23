goog.provide('kstatic.components.slideshow');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('goog.json');
goog.require('kstatic.component');

/**
 * Slideshow
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.slideshow = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.dom = {
    navNext: false,
    navPrev: false,
    slideshowInner: false,
    slideshowImg: false
  };
  this.data = {};
  this.slideshowItemKey = 0;
};

goog.inherits(kstatic.components.slideshow, kstatic.component);
goog.exportSymbol('kstatic.components.slideshow', kstatic.components.slideshow);

kstatic.components.slideshow.prototype.start = function() {
  var self = this;

  self.dom.navNext = self.node.querySelector('.nav.next');
  self.dom.navPrev = self.node.querySelector('.nav.prev');
  self.dom.slideshowInner = self.node.querySelector('.slideshow-inner');
  self.dom.slideshowImg = self.dom.slideshowInner.querySelector('.com-image');
  self.data = goog.json.unsafeParse(goog.dom.dataset.get(self.node, 'srcsets'));

  // attach event listeners
  goog.events.listen(self.dom.navNext, goog.events.EventType.CLICK, function() {
    self.slideshowItemKey++;
    if (self.slideshowItemKey >= Object.keys(self.data).length) {
      self.slideshowItemKey = 0;
    }
    self.setImage(self.slideshowItemKey);
    self.setQuote(self.slideshowItemKey);
  });

  goog.events.listen(self.dom.navPrev, goog.events.EventType.CLICK, function() {
    self.slideshowItemKey--;
    if (self.slideshowItemKey < 0) {
      self.slideshowItemKey = Object.keys(self.data).length - 1;
    }
    self.setImage(self.slideshowItemKey);
    self.setQuote(self.slideshowItemKey);
  });
};

/**
 * Set new image in slideshow
 * @param imgKey
 */
kstatic.components.slideshow.prototype.setImage = function(imgKey) {
  var self = this;

  var newSrcset = self.data['item' + imgKey].urls.join(',');
  goog.dom.dataset.set(self.dom.slideshowImg, 'srcset', newSrcset);
  self.pubsub.publish('image:refreshSrcset');
};

/**
 * Set new cite
 * @param imgKey
 */
kstatic.components.slideshow.prototype.setQuote = function(imgKey) {
  var self = this;
  try {
    var alternative = self.data['item' + imgKey].alternative;
    var description = self.data['item' + imgKey].description;
    if (alternative && alternative !== '' && description && description !== '') {
      self.node.parentNode.parentNode.querySelector('.quote .description').innerHTML = description;
      self.node.parentNode.parentNode.querySelector('.quote .cite').innerHTML = alternative;
    }
  } catch (e) {
    console.log(e);
  }
};
