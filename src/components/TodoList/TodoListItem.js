import React from 'react'

export default function TodoListItem({todo,onDeleteTodo}) {

    return (
        <tr >
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.completed}</td>
        <td>{todo.dueDate}</td>
        <td>
            <a href="#" onClick={(e) => onDeleteTodo(todo,e)}>Delete</a>
        </td>
        
    </tr>
)
}
