![scrollin title gif](https://user-images.githubusercontent.com/38357771/42121309-2af34540-7c5f-11e8-9ad9-4b7bcbb485a2.gif)

> Scroll-in text component for Vue

'vue-scrollin' is a Vue component that scrolls through various characters on mount before revealing the correct text.

## Install
Install the package from npm with your favorite package manager (eg. `yarn add vue-scrollin` or `npm i vue-scrollin`).

## Usage
Simply import and register the component and use it in your template. For example,

```
<template>
  <VScrollin>
    this text will scroll
  </VScrollin>
</template>

<script>
import VScrollin from 'vue-scrollin'

export default {
  [...]
  components: {
    VScrollin
  }
};
</script>
```

## Props
Easily customise the animation with optional props.

| Property name | Type   | Default | Description                             |
|---------------|-------:|:-------:|-----------------------------------------|
| characters    | Array  | a-z     | Characters scrolled through             |
| misses        | Number | 4       | Number of scrolls before correct letter |
| speed         | Number | 80      | Delay of each letter scoll (ms)         |

[![vue-scrollin demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/5v1wlj1z0p?module=%2Fsrc%2FApp.vue)
