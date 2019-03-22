![vue-scrollin](https://user-images.githubusercontent.com/38357771/54847524-efa67a80-4cb4-11e9-8d4c-1b830f03bedd.gif)

> Scroll-in text component for Vue

'vue-scrollin' is a Vue component that scrolls through various characters on mount before revealing the correct text.

[![Try it on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/5v1wlj1z0p?module=%2Fsrc%2FApp.vue)

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

## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/shwilliam/vue-scrollin/issues). If you wish to work on this project:

1.  [Fork the project](https://github.com/shwilliam/vue-scrollin)
2.  Create your feature branch (`git checkout -b new-feature-branch`)
3.  Commit your changes (`git commit -am 'add new feature'`)
4.  Push to the branch (`git push origin new-feature-branch`)
5.  [Submit a pull request!](https://github.com/shwilliam/vue-scrollin/pull/new/master)
