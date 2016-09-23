goog.provide('kstatic.components.search');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('goog.style');
goog.require('kstatic.component');

/**
 * Search module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.search = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.imgSrcs = [];
  this.type = 'cover';
};

goog.inherits(kstatic.components.search, kstatic.component);
goog.exportSymbol('kstatic.components.search', kstatic.components.search);

kstatic.components.search.prototype.start = function() {
  var self = this;

  goog.array.forEach(self.node.querySelectorAll('.tx-indexedsearch-res .tx-indexedsearch-res'), function(item) {
    var href = item.querySelector('.tx-indexedsearch-title a').getAttribute('href');
    var moreButton = document.createElement('div');
    moreButton.innerHTML = '<br><a href="' + href + '" class="link-arrow">Mehr</a>';
    item.querySelector('.tx-indexedsearch-descr').appendChild(moreButton);
  });
};
