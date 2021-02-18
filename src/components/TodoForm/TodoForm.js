import React, { Component } from 'react'

export class TodoForm extends Component {

    constructor(props){
        super(props)

        this.state = {title:"Le titre",dueDate:"",done:true}
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });

    }

    handleSubmit(event){
        event.preventDefault()
        const url = process.env.REACT_APP_TODO_URL;
        
        const form = {
          title: this.state.title,
          dueDate: new Date(this.state.dueDate).getTime(),
          completed: this.state.done
        }
        
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        }).then( () => console.log('ok submit'))
    
      }

    render() {

        const form = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={form.title} name="title" placeholder="Title ..." onChange={this.handleInputChange}/><br/>
                    <input type="date" name="dueDate" value={form.dueDate} onChange={this.handleInputChange}/><br/>
                    Done ?<input type="checkbox" name="done" checked={form.done} onChange={this.handleInputChange}/><br/>
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default TodoForm
