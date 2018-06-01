import React from 'react'
import { render } from 'react-dom'

import './common'

import { RootComponent } from 'root'
if (module.hot) {
  module.hot.accept()
}

class AppComponent extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <RootComponent />
      </div>
    )
  }
}

const rootElement = document.getElementById('app')
render(<AppComponent />, rootElement)
// defined Global variables
