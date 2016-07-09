import React, {Component} from 'react';
import PureRender from 'qm-pure-render';
const noop = () => {};


@PureRender
export default class Header extends Component {
  static defaultProps = {
    value: '',
    onChange: noop
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input value={this.props.value}
               className="new-todo"
               onKeyDown={this._handleKeyDown}
               onChange={this._handleChange}
               placeholder="What needs to be done?"
               autoFocus />
      </header>
    );
  }

  _handleChange = (e) => {
    this.props.onChange(e.target.value);
  };


  _handleKeyDown = (e) => {
    console.log(e.keyCode);

    if (e.keyCode === 13) {
      this.props.onSubmit();
    }
  };
}
