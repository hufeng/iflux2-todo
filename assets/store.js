import {Store} from 'iflux2'
import TextActor from './actor/text-actor'
import TodoActor from './actor/todo-actor'
import FilterActor from './actor/filter-actor'


export default class AppStore extends Store {
  bindActor() {
    return [
      new TextActor,
      new TodoActor,
      new FilterActor 
    ];
  }


  constructor(props) {
    super(props)
    window._store = this;
  }


//;;;;;;;;;;;;;action;;;;;;;;;;;;;;;;;;;;;;;
  changeValue = (value) => {
    console.log('hh');
    this.dispatch('changeValue', value);
  };


  submit = () => {
    const value = this.state().get('value');
    this.dispatch('submit', value);
  };


  changeFilter = (status) => {
    this.dispatch('filter', status)
  };

  toggle = (index) => {
    console.log(index)
    this.dispatch('toggle', index)
  }
} 