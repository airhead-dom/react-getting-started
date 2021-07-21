import React from 'react';
import TodoItem from './TodoItem';
import FuncTodoItem from './FuncTodoItem';
import './TodoContainer.css';

const data = [
  { title: 'todo 1', status: 'status 1', desc: 'desc 1' },
  { title: 'todo 2', status: 'status 2', desc: 'desc 2' },
  { title: 'todo 3', status: 'status 3', desc: 'desc 3' },
];

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Todo Container',
    };

    this.onTitleButtonClick = this.onTitleButtonClick.bind(this);
    this.onTodoItemClick = this.onTodoItemClick.bind(this);
  }

  onTitleButtonClick() {
    // set state automatically merge state
    this.setState({
      title: 'New Title',
    });

    // not triggering change/rerender
    // haram jadah!!!!
    // this.props.subtitle = 'New Subtitle';
  }

  onTodoItemClick(title, status, desc) {
    alert(`Todo: ${title} - ${status} - ${desc}`);
  }

  mapDataToTodoItem() {
    return data.map((todo) => (
      <FuncTodoItem
        title={todo.title}
        status={todo.status}
        desc={todo.desc}
        onClick={this.onTodoItemClick}
      />
    ));
  }

  renderSubtitle() {
    if (this.props.subtitle) {
      return this.props.subtitle;
    }

    return 'DEFAULT SUBTITLE';
  }

  render() {
    const title = this.state.title;

    return (
      <div className="todo-container">
        <p>{title}</p>

        {/* {this.props.subtitle !== undefined && this.props.subtitle}
        {this.props.subtitle === undefined && 'DEFAULT SUBTITLE'} */}

        {this.renderSubtitle()}

        <div>{this.mapDataToTodoItem()}</div>

        <button type="button" onClick={this.onTitleButtonClick}>
          Change title!
        </button>
      </div>
    );
  }
}

export default TodoContainer;
