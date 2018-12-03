import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginView from './LoginView'
import AnimalView from './AnimalView'
import ShopOwnerView from './ShopOwnerView'
import ShopView from './ShopView'

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={LoginView} />
          <Route path='/animals' component={AnimalView} />
          <Route path='/shopowners' component={ShopOwnerView} />
          <Route path='/shops' component={ShopView} />
        </Switch>
      </div>
    )
  }
}

export default Main
