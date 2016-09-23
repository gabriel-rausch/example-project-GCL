goog.provide('kstatic.init');

goog.require('goog.dom');
goog.require('goog.dom.query');
goog.require('goog.dom.dataset');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager');

goog.require('kstatic.application');

/**
 * Initial class to set up the application
 * @version 0.0.1
 * @final
 * @export
 * @constructor
 */
kstatic.init = function() {
  var app = new kstatic.application();
  app.start();
};

window.onload = function() {
  kstatic.init();
};
