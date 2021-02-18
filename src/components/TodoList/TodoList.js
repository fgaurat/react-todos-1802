import React, { Component } from "react";

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount(){
    
    fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(todos => this.setState( state=> ({todos})))
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
                    <tr>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed}</td>
                        <td>{todo.dueDate}</td>
                        <td>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
