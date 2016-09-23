goog.provide('kstatic.application');

goog.require('goog.dom');
goog.require('goog.dom.query');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager');
goog.require('goog.pubsub.PubSub');

// Code Modules
goog.require('kstatic.component');
goog.require('kstatic.components.nav');
goog.require('kstatic.components.header');
goog.require('kstatic.components.image');
goog.require('kstatic.components.slideshow');

// Patterns
goog.require('kstatic.components.eventwidget');
goog.require('kstatic.components.superhero');
goog.require('kstatic.components.fullimageparallax');
goog.require('kstatic.components.twocoltextimg');
goog.require('kstatic.components.heromachines');
goog.require('kstatic.components.tooltip');
goog.require('kstatic.components.search');
goog.require('kstatic.components.singlecol');

/**
 * Initial class to handle the application and modules
 * @version 0.0.1
 * @final
 * @export
 * @constructor
 */
kstatic.application = function() {
  this.modInstances = [];
  this.id = 0;
  this.pubsub = new goog.pubsub.PubSub();
};

goog.exportSymbol('kstatic.application', kstatic.application);

/**
 * start application
 */
kstatic.application.prototype.start = function() {
  var self = this;
  self.registerModules();
  self.attachEvents();
};

/**
 * Run DOM, find and register modules
 */
kstatic.application.prototype.registerModules = function() {
  var self = this;

  goog.array.forEach(goog.dom.query('.mod:not([data-init="true"])'), function(node) {
    var classes = node.className.split(' ');
    goog.array.forEach(classes, function(cls) {
      if (cls.substr(0, 4) === 'com-') {
        self.registerSingleModule(cls.substring(4), node);
      }
    });
  });
};

/**
 * Run DOM, find and register modules
 */
kstatic.application.prototype.registerSingleModule = function(modName, node) {
  var self = this;

  var ModClass = goog.getObjectByName('kstatic.components.' + modName);
  var modInstance = new ModClass(self.id++, node, self.pubsub);
  modInstance.start();
  self.modInstances.push(modInstance);
  goog.dom.dataset.set(node, 'init', true);
};

/**
 * Attach global listeners to watch scrolling and resizing
 */
kstatic.application.prototype.attachEvents = function() {
  var self = this;

  goog.events.listen(window, goog.events.EventType.SCROLL, function() {
    self.pubsub.publish('window:scroll', {
      y: self.getWindowScrollTop()
    });
  });
  goog.events.listen(window, goog.events.EventType.RESIZE, function() {
    self.pubsub.publish('window:resize');
  });
};

/**
 * Helper Function to get Window Scroll Top
 */
kstatic.application.prototype.getWindowScrollTop = function() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};
