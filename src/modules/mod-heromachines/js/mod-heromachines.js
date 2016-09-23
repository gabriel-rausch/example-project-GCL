goog.provide('kstatic.components.heromachines');

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
 * Hero machines
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.heromachines = function(id, node, pubsub) {
  goog.base(this, id, node, pubsub);
  this.dom = {
    bigView: false,
    bigLink: false,
    bigImg: false
  };
};

goog.inherits(kstatic.components.heromachines, kstatic.component);
goog.exportSymbol('kstatic.components.heromachines', kstatic.components.heromachines);

kstatic.components.heromachines.prototype.start = function() {
  var self = this;
  self.dom.bigView = self.node.querySelector('.big-view');
  self.dom.bigLink = self.dom.bigView.querySelector('.txt a');
  self.dom.bigImg = self.dom.bigView.querySelector('.mod.com-image');

  // click: follow link in a-tag
  goog.events.listen(self.dom.bigLink, goog.events.EventType.CLICK, function(e) {
    e.preventDefault();
    window.location.hash = self.dom.bigLink.getAttribute('href');
  });

  goog.array.forEach(self.node.querySelectorAll('.thumbnail'), function(thumbnail) {

    // hover: change big view
    goog.events.listen(thumbnail, goog.events.EventType.MOUSEOVER, function() {
      var txt = thumbnail.querySelector('.link span').innerHTML;
      var srcset = goog.dom.dataset.get(thumbnail.querySelector('.mod.com-image'), 'srcset');
      var href = thumbnail.querySelector('.link').getAttribute('href');
      self.setBigContent(txt, srcset, href);
    });

    // click: follow link in a-tag
    goog.events.listen(thumbnail, goog.events.EventType.CLICK, function(e) {
      e.preventDefault();
      if (goog.dom.getViewportSize().width >= self.viewports.desktop) {
        window.location.hash = thumbnail.querySelector('.link').getAttribute('href');
      }
    });
  });
};

/**
 * Set new image in slideshow
 * @param txt
 * @param srcset
 * @param href
 */
kstatic.components.heromachines.prototype.setBigContent = function(txt, srcset, href) {
  var self = this;
  //self.dom.bigLink.innerHTML = txt;
  self.dom.bigLink.setAttribute('href', href);
  goog.dom.dataset.set(self.dom.bigImg, 'srcset', srcset);
  self.pubsub.publish('image:refreshSrcset');
};
