import React, { Component } from 'react'

export class TodoForm extends Component {

    constructor(){
        
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="title" placeholder="Title ..."/><br/>
                    <input type="date" name="dueDate"/><br/>
                    Done ?<input type="checkbox" name="done"/><br/>
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default TodoForm
