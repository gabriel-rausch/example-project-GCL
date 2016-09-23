goog.provide('kstatic.components.nav');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.component');

/**
 * Main navigation
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.nav = function(id, node) {
  goog.base(this, id, node);
  this.navItemsWithChildren = [];
};

goog.inherits(kstatic.components.nav, kstatic.component);
goog.exportSymbol('kstatic.components.nav', kstatic.components.nav);

kstatic.components.nav.prototype.start = function() {
  var self = this;

  self.attachListeners();

  self.markIfCurrentHasSubs();
};

/**
 * Attach listeners to nav elements
 */
kstatic.components.nav.prototype.attachListeners = function() {
  var self = this;

  // attach mouseover events to all li-1 elements
  goog.array.forEach(self.node.querySelectorAll('.li-1'), function(li) {
    goog.dom.classlist.remove(li, 'no-js');

    if (li.querySelector('.ul-2') !== null) {
      goog.dom.classlist.add(li, 'subs');
    }

    self.openCurrentSubs();

    goog.events.listen(li, goog.events.EventType.MOUSEOVER, function() {
      if (!goog.dom.classlist.contains(li, 'open')) {
        self.removeOpenState();
        if (li.querySelector('.ul-2') !== null) {
          goog.dom.classlist.add(li, 'open');
        }
        if (!goog.dom.classlist.contains(li, 'subs')) {
          self.openCurrentSubs();
        }
      }
    });
  });

  // close subnav on leave header or hover on logo
  goog.events.listen(document.querySelector('.mod.com-header'), goog.events.EventType.MOUSELEAVE, function() {
    self.removeOpenState();
    self.openCurrentSubs();
  });
  goog.events.listen(document.querySelector('.mod.com-header .logo'), goog.events.EventType.MOUSEOVER, function() {
    self.removeOpenState();
    self.openCurrentSubs();
  });
  /*goog.events.listen(document.querySelector('.mod.com-header .lang-picker'), goog.events.EventType.MOUSEOVER, function() {
    self.removeOpenState();
    self.openCurrentSubs();
  });*/
  goog.events.listen(document.querySelector('.mod.com-header .search-btn'), goog.events.EventType.MOUSEOVER, function() {
    self.removeOpenState();
    self.openCurrentSubs();
  });
};

/**
 * Attach hover events
 */
kstatic.components.nav.prototype.removeOpenState = function() {
  var self = this;
  goog.array.forEach(self.node.querySelectorAll('.li-1'), function(li) {
    goog.dom.classlist.remove(li, 'open');
  });
};

/**
 * Open sub navi of current active main category
 */
kstatic.components.nav.prototype.openCurrentSubs = function() {
  var self = this;
  if (self.node.querySelector('.li-1.active.subs') !== null) {
    goog.dom.classlist.add(self.node.querySelector('.li-1.active.subs'), 'open');
  }
};

/**
 * Set class to body if current active category has subs
 */
kstatic.components.nav.prototype.markIfCurrentHasSubs = function() {
  var self = this;
  if (self.node.querySelector('.li-1.active.subs') !== null) {
    goog.dom.classlist.add(document.body, 'subnav');
  }
};
