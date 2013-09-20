
/**
 * Module dependencies.
 */

var domify = require('domify')
  , events = require('event')
  , wrap = require('wrap');

/**
 * Magnified search input.
 */

module.exports = function(el) {
  var handle = domify('<div class="magnifier '+el.className+'">')
    , width = el.style.width;

  // Need to wrap input to add the handle

  el.className = 'magnifier-input';
  wrap(el, handle);

  // Events

  function onfocus() {
    var parentWidth = getComputedStyle(this.parentNode.parentNode).width;
    handle.classList.add('focus');
    el.style.width = parentWidth;
  }
  function onblur() {
    if (el.value == '') {
      handle.classList.remove('focus');
      el.style.width = width;
    }
  }
  function keyup(e) {
    if (13 == e.keyCode) {
      handle.classList.remove('focus');
      handle.classList.add('spin');
      el.style.width = width;
    }
  }
  events.bind(el, 'focus', onfocus);
  events.bind(el, 'blur', onblur);
  events.bind(el, 'keyup', keyup);
}

