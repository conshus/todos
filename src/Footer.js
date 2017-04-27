import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        {/*<!-- This should be `0 items left` by default -->*/}
        <span className="todo-count"><strong>{this.props.itemsLeft}</strong> item{this.props.itemsLeft === 1 ? '' : 's'} left</span>
        {/*<!-- Remove this if you don't implement routing -->*/}
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        {/*<!-- Hidden if no completed items are left ↓ -->*/}
        {this.props.todos.length-this.props.itemsLeft!==0 ? <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button> : null}
      </footer>
    );
  }
}

export default Footer;
