import { root } from '@lynx-js/react'

import { App } from './App.jsx'

root.render(<App url="" />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
