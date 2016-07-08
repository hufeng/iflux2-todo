import React, {Component} from 'react';
import {Relax} from 'iflux2';
import Header from '../component/header';
import {valueQL} from '../ql';
const noop = () => {};


@Relax
export default class HeaderContainer extends Component {
  static defaultProps = {
    value: valueQL,
    submit: noop,
    changeValue: noop
  };


  render() {
    
    return (
      <Header 
        value={this.props.value}
        onSubmit={this.props.submit}
        onChange={this.props.changeValue}
      />
    );
  }
}