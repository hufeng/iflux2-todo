import React, {Component} from 'react';
import {List} from 'immutable'
import PureRender from 'qm-pure-render'
const noop = () => {}


@PureRender
export default class MainSection extends Component {
  static defaultProps = {
    data: List(),
    onChange: noop
  };

  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {this.props.data.map((v, k) =>
            <li key={v.get('id')}>
              <div className="view">
                <input className="toggle"
                       type="checkbox"
                       value={v.get('done')}
                       onChange={() => this.props.onChange(k)}/>
                <label>{v.get('text')}</label>
                <button className="destroy"></button>
              </div>
            </li>
          )}
        </ul>
      </section>
    );
  }
}
