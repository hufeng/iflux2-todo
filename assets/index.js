import React, {Component} from 'react'
import {render} from 'react-dom'
import {StoreProvider} from 'iflux2'
import AppStore from './store'
import HeaderContainer from './container/header-container'
import MainContainer from './container/main-container'
import FooterContainer from './container/footer-container'
import './css/base.css'
import './css/index.css'



@StoreProvider(AppStore, {debug: true})
export default class TodoApp extends Component {
  render() {
    return (
      <section className="todoapp">
        <HeaderContainer/>
        <MainContainer/>
        <FooterContainer/>
      </section>
    );
  }
} 


render(<TodoApp/>, document.getElementById('app'));


