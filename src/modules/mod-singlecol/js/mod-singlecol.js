goog.provide('kstatic.components.singlecol');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.forms');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('kstatic.component');

/**
 * singlecol module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.singlecol = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.type = '';
  this.singlecols = [];
};

goog.inherits(kstatic.components.singlecol, kstatic.component);
goog.exportSymbol('kstatic.components.singlecol', kstatic.components.singlecol);

kstatic.components.singlecol.prototype.start = function() {
  var self = this;
  /**
   * Find text-elements which open next table (e.g. in Karriere > Ausbildung)
   */
  goog.array.forEach(self.node.querySelectorAll('.text-ausbildung'), function(element, index) {

    // show first item
    goog.array.forEach(self.node.querySelectorAll('table table'), function(table, tableIndex) {
      if (tableIndex === 0) {
        goog.dom.classlist.add(table, 'show');
      }
    });

    // attach listens on buttons
    goog.events.listen(element, goog.events.EventType.CLICK, function() {
      goog.array.forEach(self.node.querySelectorAll('table table'), function(table, tableIndex) {
        if (tableIndex === index && !goog.dom.classlist.contains(table, 'show')) {
          goog.dom.classlist.add(table, 'show');
        } else {
          goog.dom.classlist.remove(table, 'show');
        }
      });
    });
  });
};
