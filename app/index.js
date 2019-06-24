import 'react-hot-loader/patch'
require('./style.css')

import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import AppRouter from './routers/AppRouter'

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#app')
  )
}

render(AppRouter)

if (module.hot) {
  module.hot.accept('./routers/AppRouter', () => {
    render(AppRouter)
  })
}




