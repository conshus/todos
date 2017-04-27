import React, { Component } from 'react';
let editEnabled = false;
class Main extends Component {

  handleToggle(todo,event) {
    this.props.sendTodoToggleToApp(todo);
  }

  handleDestroy(todo,event) {
    this.props.sendTodoDestroyToApp(todo);
  }

  toggleAll(toggleState){
    this.props.sendTodoToggleAllToApp(toggleState);
  }

  handleEdit(todo,event){
    console.log(event.target);
    this.props.sendTodoEditToApp(todo);
  }

  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" checked={this.props.itemsLeft===0} />
        <label htmlFor="toggle-all" onClick={this.toggleAll.bind(this, this.props.itemsLeft===0 ? false : true )}>Mark all as complete</label>
        <ul className="todo-list">
          {/*<!-- These are here just to show the structure of the list items -->
          <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->*/}
          {this.props.todos.map((todo, index) => {
            return (
              <li className={todo.complete ? "completed" : null || todo.edit ? "editing" : null} key={index}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={todo.complete} onClick={this.handleToggle.bind(this,todo)} />
                  <label onDoubleClick={this.handleEdit.bind(this,todo)} >{todo.task}</label>
                  <button className="destroy" onClick={this.handleDestroy.bind(this,todo)}></button>
                </div>
                <input className="edit" value={todo.task} />
              </li>
            )
          })}
        </ul>
      </section>
    );
  }
}

export default Main;
