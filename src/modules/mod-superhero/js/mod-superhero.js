goog.provide('kstatic.components.superhero');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.component');

/**
 * Superhero module (a landingpage)
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.superhero = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
};

goog.inherits(kstatic.components.superhero, kstatic.component);
goog.exportSymbol('kstatic.components.superhero', kstatic.components.superhero);

kstatic.components.superhero.prototype.start = function() {
  var self = this;

  self.pubsub.subscribe('window:resize', function() {
    self.setHeight();
  });

  // initial calculation
  self.setHeight();
};

/**
 * Calculate height
 */
kstatic.components.superhero.prototype.setHeight = function() {
  var self = this;

  // set height if viewport size >= desktop
  if (goog.dom.getViewportSize().width >= self.viewports.desktop) {
    var heightHeader = goog.style.getSize(document.querySelector('.com-header')).height;
    var viewportHeight = goog.dom.getViewportSize().height;
    self.node.style.height = (viewportHeight - heightHeader) + 'px';
  } else {
    self.node.style.height = '';
  }
};
