<template>
  <div class="v-scrollin">
    {{scrollingText}}
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";

export default {
  name: "VScrollin",
  props: {
    characters: {
      // characters used during flicker
      type: Array,
      required: false,
      default: () => "qwertyuiopasdfghjklzxcvbnm".split("")
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
  data() {
    return {
      amountFinished: 0,
      currentMisses: 0,
      finishedText: this.$slots.default[0].text,
      scroll: null,
      scrollingText: "",
      workingIndices: []
    };
  },
  mounted() {
    this.fillRandomLetters();
    this.scroll = setInterval(() => {
      this.tick();
    }, this.speed);
  },
  methods: {
    fillRandomLetters() {
      const startingLetters = [];
      for (let n = 0; n < this.finishedText.length; n++) {
        startingLetters.push(this.getRandomLetter());
      }
      this.scrollingText = startingLetters.join("");
    },
    getRandomLetter() {
      return this.characters[
        Math.floor(Math.random() * this.characters.length)
      ];
    },
    replace(str, i, replacement) {
      if (!replacement) return str
      return (
        str.substr(0, i) + replacement + str.substr(i + replacement.length)
      );
    },
    tick() {
      for (
        let n = this.amountFinished;
        n < this.amountFinished + this.workingIndices.length;
        n++
      ) {
        this.scrollingText = this.replace(
          this.scrollingText,
          n,
          this.getRandomLetter()
        );
      }
      if (this.workingIndices.length < 3 && !this.amountFinished) {
        this.workingIndices.push(this.workingIndices.length);
      }
      if (
        this.scrollingText === this.finishedText &&
        this.currentMisses === this.misses
      ) {
        clearInterval(this.scroll);
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
</script>
