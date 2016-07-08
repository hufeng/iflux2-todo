import React, {Component} from 'react'
import {Relax} from 'iflux2'
import Footer from '../component/footer'
import {countQL} from '../ql'
const noop = () => {}


@Relax
export default class FooterContainer extends Component {
  static defaultProps = {
    changeFilter: noop,
    filterStatus: '',
    count: countQL
  };

  render() {
    const {changeFilter, filterStatus, count} = this.props

    return (
      <Footer 
        count={count}
        filterStatus={filterStatus}
        onChangeFilter={changeFilter}/>
    );
  }
}
