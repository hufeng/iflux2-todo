import React, {Component} from 'react';
import PureRender from 'qm-pure-render'
const noop = () => {}


@PureRender
export default class Footer extends Component {
	static defaultProps = {
		onChangeFilter: noop,
		filterStatus: '',
		count: 0
	};


  render() {
		const {onChangeFilter, filterStatus, count} = this.props
		let countText = ''
		console.log(count)

		if (count > 1) {
			countText = `${count} items left`
		} else if (count === 1) {
			countText = '1 item left'
		}

    return (
      <footer className="footer">
				<span className="todo-count">{countText}</span>
				<ul className="filters">
					<li>
						<a href="javascript:;" 
							className={"" === filterStatus ? 'selected' : ''} 
							onClick={() => onChangeFilter('')}>
							All
						</a>
					</li>
					<li>
						<a href="javascript:;" 
							className={"active" === filterStatus ? 'selected' : ''} 
							onClick={() => onChangeFilter('active')}>
							Active
						</a>
					</li>
					<li>
						<a href="javacript:;" 
							className={'completed' === filterStatus ? 'selected' : ''} 
							onClick={() => onChangeFilter('completed')}>
							Completed
						</a>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
    );
  }
}