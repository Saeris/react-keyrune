<p align="center">
  <img alt="React Keyrune" src="/resources/header.png" style="max-width:100%;"/>
</p>
<p align="center">
  <a href="https://www.npmjs.org/package/@saeris/react-keyrune">
    <img src="https://img.shields.io/npm/v/@saeris/react-keyrune.svg?style=flat" alt="npm">
  </a>
  <a href="https://travis-ci.org/Saeris/react-keyrune">
    <img src="https://travis-ci.org/Saeris/react-keyrune.svg?branch=master" alt="travis">
  </a>
  <a href="https://codecov.io/gh/Saeris/react-keyrune">
    <img src="https://codecov.io/gh/Saeris/react-keyrune/branch/master/graph/badge.svg" alt="codecov"/>
  </a>
  <a href="https://snyk.io/test/github/Saeris/react-keyrune?targetFile=package.json">
    <img src="https://snyk.io/test/github/Saeris/react-keyrune/badge.svg?targetFile=package.json" alt="Known Vulnerabilities">
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/Saeris/react-keyrune.svg" alt="Known Vulnerabilities" alt="greenkeeper">
  </a>
</p>
<p align="center">A simple React component wrapper around <a href="https://github.com/andrewgioia/Keyrune">Keyrune</a>.</p>

---

## 🔧 Installation

```bash
npm install --save graphql @saeris/react-keyrune keyrune
# or
yarn add graphql @saeris/react-keyrune keyrune
```

> Note: [Keyrune](https://github.com/andrewgioia/Keyrune) is a required peer-dependency. This component will not work without it!

## 📦 Usage

To use this component, simply import it and pass in some props:

```jsx
import React, { Component } from "react"
import { render } from "react-dom"
import { Keyrune } from "@saeris/react-keyrune"

const App = () => (
  <Keyrune set="leg" rarity="mythic" gradient fixed size="2x"/>
)

render(<App />, document.getElementById("root"))
```

## 📋 Props

Prop Name | Prop Type | Required | Default Value | Notes
----------|:---------:|:--------:|:-------------:|:-----
set       | `string`  | Yes      | None          | For a list of available sets, please refer to either [Keyrune's documentation](https://andrewgioia.github.io/Keyrune/icons.html) or the [live demo site](https://react-keyrune.saeris.io)
rarity     | `string`  | No       | None          | Possible Values: `common`, `c`, `uncommon`, `u`, `rare`, `r`, `mythic`, `m`, `timeshifted`, `t`
size      | `string`  | No       | None          | Possible Values: `2x`, `3x`, `4x`, `5x`, `6x`
gradient  | `boolean` | No       | `false`       | Used to toggle a gradient effect on the icon. The color will change based on the value of `rarity`
foil      | `boolean` | No       | `false`       | Used to toggle a foil color. This will override `rarity` and the fill will change when used in conjunction with `gradient`
fixed     | `boolean` | No       | `false`       | Used to toggle fixed-width icons


## 🏖️ Demo

You can either visit the [live demo site](https://react-keyrune.saeris.io), clone this repo and run the demo locally using `yarn start` and opening your browser to http://localhost:3000, or you can just play with it inside of CodeSandbox [here](https://codesandbox.io/s/github/Saeris/react-keyrune/tree/master/demo).

The demo site includes a searchable list of all available sets with a handy preview tool with which you can quickly see the effects of the available props along with generated markup you can copy and paste right into your own application!

## 📣 Acknowledgements

Special thanks to [Andrew Gioia](https://github.com/andrewgioia) the creator of [Keyrune](https://github.com/andrewgioia/Keyrune) and to all that project's awesome contributors, without whom this library wouldn't exist!

And of course, a huge thanks to [Wizards of the Coast](http://magicthegathering.com) for creating this game we all love!

## 🥂 License

All card symbol images are copyright [Wizards of the Coast](http://magicthegathering.com).

Keyrune is licensed under the the [SIL OFL 1.1 license](http://scripts.sil.org/OFL).

Released under the [MIT license](https://github.com/Saeris/graphql-scalars/blob/master/LICENSE.md).
