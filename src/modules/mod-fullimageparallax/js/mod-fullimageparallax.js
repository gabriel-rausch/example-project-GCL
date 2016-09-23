goog.provide('kstatic.components.fullimageparallax');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.component');

/**
 * Full image with parallax effect
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.fullimageparallax = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
};

goog.inherits(kstatic.components.fullimageparallax, kstatic.component);
goog.exportSymbol('kstatic.components.fullimageparallax', kstatic.components.fullimageparallax);

kstatic.components.fullimageparallax.prototype.start = function() {
  var self = this;

  self.pubsub.subscribe('window:scroll', function(scrollPosition) {
    var winHeight = self.getWindowHeight();
    var delta = 100 * scrollPosition.y / winHeight;
    console.debug(delta);
    //self.node.querySelector('.mod.com-image').style.backgroundPositionY = '0%';
  });
};
