import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-flex-router'

class App extends React.Component {
  render(){
    return (
      <HashRouter>
        <Route component={Home} path="/"/>
        <Route component={Item} path="/item"/>
      </HashRouter>
    )
  }
}