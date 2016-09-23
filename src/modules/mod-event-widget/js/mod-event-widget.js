goog.provide('kstatic.components.eventwidget');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('kstatic.component');

/**
 * eventwidget module
 * @version 0.0.1
 * @constructor
 * @extends {kstatic.component}
 */
kstatic.components.eventwidget = function(id, node) {
  goog.base(this, id, node);
  this.scrollLength = 400;
  this.scrollTimeout = false;
  this.dom = {
    navNext: false,
    navPrev: false,
    eventsInner: false
  };
  this.nextX = 0;
};

goog.inherits(kstatic.components.eventwidget, kstatic.component);
goog.exportSymbol('kstatic.components.eventwidget', kstatic.components.eventwidget);

kstatic.components.eventwidget.prototype.start = function() {
  var self = this;
  self.dom.navNext = self.node.querySelector('.nav.next');
  self.dom.navPrev = self.node.querySelector('.nav.prev');
  self.dom.eventsInner = self.node.querySelector('.events-inner');

  self.attacheEvents();
};

kstatic.components.eventwidget.prototype.attacheEvents = function() {
  var self = this;

  goog.events.listen(self.dom.navNext, goog.events.EventType.CLICK, function() {
    if (self.mqMatch('desktop')) {
      self.nextX += self.scrollLength;
    } else {
      self.nextX += goog.style.getSize(self.dom.eventsInner).width;
      if (self.nextX > goog.style.getSize(self.dom.eventsInner).width * document.querySelectorAll('.event').length) {
        self.nextX = goog.style.getSize(self.dom.eventsInner).width * document.querySelectorAll('.event').length;
      }
    }
    self.scrollTo(self.dom.eventsInner, self.nextX, 500);
  });

  goog.events.listen(self.dom.navPrev, goog.events.EventType.CLICK, function() {
    if (self.mqMatch('desktop')) {
      self.nextX -= self.scrollLength;
    } else {
      self.nextX -= goog.style.getSize(self.dom.eventsInner).width;
    }
    if (self.nextX < 0) {
      self.nextX = 0;
    }
    self.scrollTo(self.dom.eventsInner, self.nextX, 500);
  });
};

kstatic.components.eventwidget.prototype.scrollTo = function(element, to, duration) {
  var self = this;
  var start = element.scrollLeft,
    change = to - start,
    increment = 20;

  var animateScroll = function(elapsedTime) {
    clearTimeout(self.scrollTimeout);
    elapsedTime += increment;
    var position = self.easeInOut(elapsedTime, start, change, duration);
    element.scrollLeft = position;
    if (elapsedTime < duration) {
      self.scrollTimeout = setTimeout(function() {
        animateScroll(elapsedTime);
      }, increment);
    }
  };

  animateScroll(0);
};

kstatic.components.eventwidget.prototype.easeInOut = function(currentTime, start, change, duration) {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return change / 2 * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
};
