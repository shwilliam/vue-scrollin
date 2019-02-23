(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('timers')) :
  typeof define === 'function' && define.amd ? define(['exports', 'timers'], factory) :
  (factory((global.VScrollin = {}),global.timers));
}(this, (function (exports,timers) { 'use strict';

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-scrollin"},[_vm._v(" "+_vm._s(_vm.scrollingText)+" ")])},staticRenderFns: [],
    name: "VScrollin",
    props: {
      characters: {
        // characters used during flicker
        type: Array,
        required: false,
        default: function () { return "qwertyuiopasdfghjklzxcvbnm".split(""); }
      },
      misses: {
        // amount of scrolls before correct letter
        type: Number,
        required: false,
        default: 4
      },
      speed: {
        // delay of each letter scroll (ms)
        type: Number,
        required: false,
        default: 80
      }
    },
    data: function data() {
      return {
        amountFinished: 0,
        currentMisses: 0,
        finishedText: this.$slots.default[0].text,
        scroll: null,
        scrollingText: "",
        workingIndices: []
      };
    },
    mounted: function mounted() {
      var this$1 = this;

      this.fillRandomLetters();
      this.scroll = timers.setInterval(function () {
        this$1.tick();
      }, this.speed);
    },
    methods: {
      fillRandomLetters: function fillRandomLetters() {
        var this$1 = this;

        var startingLetters = [];
        for (var n = 0; n < this.finishedText.length; n++) {
          startingLetters.push(this$1.getRandomLetter());
        }
        this.scrollingText = startingLetters.join("");
      },
      getRandomLetter: function getRandomLetter() {
        return this.characters[
          Math.floor(Math.random() * this.characters.length)
        ];
      },
      replace: function replace(str, i, replacement) {
        if (!replacement) { return str }
        return (
          str.substr(0, i) + replacement + str.substr(i + replacement.length)
        );
      },
      tick: function tick() {
        var this$1 = this;

        for (
          var n = this.amountFinished;
          n < this.amountFinished + this.workingIndices.length;
          n++
        ) {
          this$1.scrollingText = this$1.replace(
            this$1.scrollingText,
            n,
            this$1.getRandomLetter()
          );
        }
        if (this.workingIndices.length < 3 && !this.amountFinished) {
          this.workingIndices.push(this.workingIndices.length);
        }
        if (
          this.scrollingText === this.finishedText &&
          this.currentMisses === this.misses
        ) {
          timers.clearInterval(this.scroll);
        } else if (++this.currentMisses === this.misses) {
          this.scrollingText = this.replace(
            this.scrollingText,
            this.amountFinished,
            this.finishedText[this.amountFinished]
          );
          this.currentMisses = 0;
          if (++this.amountFinished >= this.finishedText.length - 2) {
            this.workingIndices
              .sort(function(a, b) {
                return a - b;
              })
              .shift();
          } else {
            this.workingIndices.sort(function(a, b) {
              return a - b;
            })[0] =
              this.amountFinished + 3;
          }
        }
      }
    }
  };

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component('VScrollin', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // To auto-install when vue is found
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.install = install;
  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
