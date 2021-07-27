"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var uppy = Uppy.Core().use(Uppy.Dashboard, {
  inline: true,
  target: '#drag-drop-area',
  locale: Uppy.locales.ru_RU
}).use(Uppy.Tus, {
  endpoint: 'https://tusd.tusdemo.net/files/'
});
uppy.on('complete', function (result) {
  console.log('Upload complete! We’ve uploaded these files:', result.successful);
});
"use strict";

(function () {
  function tick(elem) {
    if (elem.target) elem = elem.target;
    var limit = elem.maxLength,
        parent = elem.parentElement,
        length = elem.value.length;
    parent.dataset['limit'] = limit;
    parent.dataset['remaining'] = limit - length;
    parent.classList.remove('warning', 'critical');
    if (length / limit >= 0.90) // We've reached 90% of the limit.
      parent.classList.add('critical');else if (length / limit >= 0.75) // Reached 75% of the limit.
      parent.classList.add('warning');
  }

  var elements = _toConsumableArray(document.querySelectorAll('input[maxlength], textarea[maxlength]'));

  var _iterator = _createForOfIteratorHelper(elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      elem.addEventListener('keyup', tick);
      elem.parentElement.classList.add('badged');
      tick(elem);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
})();

var input1 = document.querySelector('input[name=tags]'),
    tagify1 = new Tagify(input1, {
  enforeWhitelist: true,
  blacklist: ["fuck", "shit"]
});
