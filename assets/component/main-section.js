import React, {Component} from 'react'
import {Relax} from 'iflux2'
import {todoQL, todoDQL} from '../ql' 
const noop = () => {}


@Relax
export default class MainSection extends Component {
  static defaultProps = {
    index: 0,
    todo: todoQL,
    todoDQL: todoDQL,
    toggle: noop,
    destroy: noop,
    toggleAll: noop
  };

  render() {
    const {toggle, toggleAll, destroy} = this.props
    console.log('test dql:', this.props.todoDQL.toString());

    return (
      <section className="main">
        <input className="toggle-all" 
               type="checkbox"
               onChange={(e) => toggleAll(e.target.checked)}/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todo.map((v, k) =>
            <li key={v.get('id')}>
              <div className="view">
                <input className="toggle"
                       type="checkbox"
                       checked={v.get('done')}
                       onChange={() => toggle(k)}/>
                <label>{v.get('text')}</label>
                <button className="destroy" 
                        onClick={() => destroy(k)} />
              </div>
            </li>
          )}
        </ul>
      </section>
    );
  }
}
