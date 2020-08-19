import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/all.css'

import serviceWorker from './sw'
import App from './app'
import store from './redux/store'
import config from './config/config.json'

const Root = () => {
  return (
    <Provider store={store(config.App.DEVELOPMENT)}>
      <App />
    </Provider>
  )
}
const element = document.getElementById('root')
render(<Root />, element)
serviceWorker()
