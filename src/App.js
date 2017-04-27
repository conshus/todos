import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state = {
      todos: [
        {task: 'Taste JavaScript', complete: true, edit: false},
        {task: 'Buy a unicorn', complete: false, edit: false }
      ]
    }
  }

  addTodo (words) {
    let newTodo = { task: words, complete: false }
    let newTodosArray = this.state.todos.concat(newTodo)
    this.setState({
      todos: newTodosArray
    })
  }

  toggleTodo(toggledTodo) {
    let newTodosArray = this.state.todos.map(function(todo, index) {
      if (todo === toggledTodo){
        todo.complete = !toggledTodo.complete;
      }
      return(todo);
    })
    this.setState({
      todos: newTodosArray
    })
  }

  destroyTodo(destroyedTodo){
    let newTodosArray = this.state.todos.filter(function(todo, index){
      if (todo !== destroyedTodo){
        return(todo)
      }
    })
    this.setState({
      todos: newTodosArray
    })
  }

  itemsLeft(){
    let newTodosArray = this.state.todos.filter(function(todo, index){
      if (todo.complete === false){
        return(todo)
      }
    })
    return newTodosArray.length;
  }

  toggleAll(toggleState){
    let newTodosArray = this.state.todos.map(function(todo, index) {
      todo.complete = toggleState;
      return(todo);
    })
    this.setState({
      todos: newTodosArray
    })

  }
  clearCompleted(){
    let newTodosArray = this.state.todos.filter(function(todo, index){
      if (todo.complete !== true){
        return(todo)
      }
    })
    this.setState({
      todos: newTodosArray
    })
  }
  editTodo(editTodo){
    let newTodosArray = this.state.todos.map(function(todo, index) {
      if (todo === editTodo){
        todo.edit = true;
      }
      return(todo);
    })
    this.setState({
      todos: newTodosArray
    })
  }


  render() {
    return (
        <section className="todoapp">
          <Header sendWordsToApp={this.addTodo.bind(this)} />
    			{/*<!-- This section should be hidden by default and shown when there are todos -->*/}
          <Main
            todos={this.state.todos}
            sendTodoToggleToApp={this.toggleTodo.bind(this)}
            sendTodoDestroyToApp={this.destroyTodo.bind(this)}
            itemsLeft={this.itemsLeft()}
            sendTodoEditToApp={this.editTodo.bind(this)}
            sendTodoToggleAllToApp={this.toggleAll.bind(this)} />

    			{/*<!-- This footer should hidden by default and shown when there are todos -->*/}
          {this.state.todos.length!==0 ? <Footer itemsLeft={this.itemsLeft()} todos={this.state.todos} clearCompleted={this.clearCompleted.bind(this)} /> : null}

    		</section>
    );
  }
}

export default App;
