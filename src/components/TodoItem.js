import React from 'react';
import './TodoContainer.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.onTodoItemClick = this.onTodoItemClick.bind(this);
  }

  onTodoItemClick() {
    // passing data to parent
    // run callback passed by the parent
    this.props.onClick(this.props.title, this.props.status, this.props.desc);
  }

  render() {
    return (
      <div onClick={this.onTodoItemClick}>
        <p>{this.props.title}</p>
        <p>{this.props.status}</p>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default TodoItem;
