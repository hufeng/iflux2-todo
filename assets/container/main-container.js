import React, {Component} from 'react'
import {Relax} from 'iflux2'
import MainSection from '../component/main-section'
import {todoQL} from '../ql' 
const noop = () => {}


@Relax
export default class MainContainer extends Component {
  static defaultProps = {
    todo: todoQL,
    toggle: noop
  };


  render() {
    return (
      <MainSection
        onChange={this.props.toggle} 
        data={this.props.todo}/>
    )
  }
} 