import * as React from 'react'
import { render } from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { App } from './App'

const root = document.createElement('div')

const view = (Component: any) => {
  render(<AppContainer><Component /></AppContainer>, root)
}

view(App)
document.body.insertBefore(root, document.body.firstChild)


declare const module: any
if (module.hot) {
  module.hot.accept('./App', () => view(App))
}
