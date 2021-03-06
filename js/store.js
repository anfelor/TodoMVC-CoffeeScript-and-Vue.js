// Generated by CoffeeScript 1.6.3
/*jshint unused:false*/

(function(exports) {
  'use strict';
  var STORAGE_KEY;
  STORAGE_KEY = 'todos-vuejs';
  return exports.todoStorage = {
    fetch: function() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },
    save: function(todos) {
      return localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  };
})(window);
