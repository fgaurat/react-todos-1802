import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.onDeleteTodo = this.onDeleteTodo.bind(this);
  }

  loadTodos() {
    const url_todos = process.env.REACT_APP_TODO_URL;
    fetch(url_todos)
      .then((response) => response.json())
      .then((todos) => this.setState((state) => ({ todos })));
  }

  componentDidMount() {
    this.loadTodos();
  }

  onDeleteTodo(todo, e) {
    e.preventDefault();
    console.log("this", this);
    console.log("onDeleteTodo", todo);
    const url_todos = `${process.env.REACT_APP_TODO_URL}/${todo.id}`; // http://localhost:300/todos/2

    // fetch(url_todos,{method:'DELETE'})
    //     .then((response) => this.loadTodos())
    
    fetch(url_todos, { method: "DELETE" }).then((response) =>
      this.setState((state) => ({
        todos: state.todos.filter((current_todo) => current_todo.id != todo.id),
      }))
    );
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>completed</th>
              <th>dueDate</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onDeleteTodo={this.onDeleteTodo}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
