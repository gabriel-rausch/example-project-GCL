goog.provide('kstatic.components.header');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('kstatic.component');

/**
 * Main header
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.header = function(id, node) {
  goog.base(this, id, node);
  this.searchActiveState = 'search-active';
  this.dom = {
    searchBtn: this.node.querySelector('.search-btn'),
    closeBtn: this.node.querySelector('.search-close')
  };
};

goog.inherits(kstatic.components.header, kstatic.component);
goog.exportSymbol('kstatic.components.header', kstatic.components.header);

kstatic.components.header.prototype.start = function() {
  var self = this;

  goog.events.listen(self.dom.searchBtn, 'click', function(e) {
    if (goog.dom.classlist.contains(self.node, self.searchActiveState)) {
      //window.location.href = '/';
    } else {
      e.preventDefault();
      self.toggleSearchbar(true);
    }
  });

  goog.events.listen(self.dom.closeBtn, 'click', function(e) {
    e.preventDefault();
    goog.dom.forms.setValue(self.node.querySelector('.search-input'), '');
    self.toggleSearchbar();
  });

  // mobile nav
  goog.events.listen(this.node.querySelector('.mobile-nav'), 'click', function(e) {
    e.preventDefault();
    goog.dom.classlist.toggle(document.querySelector('.mod.com-nav'), 'open');
  });
};

kstatic.components.header.prototype.toggleSearchbar = function(show) {
  var self = this;
  if (show) {
    goog.dom.classlist.add(self.node, self.searchActiveState);
    goog.dom.forms.focusAndSelect(self.node.querySelector('.search-input'));
  } else {
    goog.dom.classlist.remove(self.node, self.searchActiveState);
  }
};
