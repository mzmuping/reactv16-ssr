import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'
import { StaticRouter } from 'react-router-dom'
import routes from '@src/share/routes'
import { renderRoutes } from 'react-router-config'

module.exports = function render(req, initialState) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState)

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store}>
      {/* <App /> */}
      <StaticRouter location={req.path}>{renderRoutes(routes)}</StaticRouter>
    </Provider>
  )

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState()

  return { content, preloadedState }
}
