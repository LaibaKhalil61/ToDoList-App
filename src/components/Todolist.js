import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
export function TodoList(props){
    return (
        <div className='todo-list'>
            <span className={props.todo.isCompleted ? "Completed" :""} onClick={()=>props.toggleComplete(props.todo.id)}>{props.todo.todo}</span>
            <div className='icons'>
                <FontAwesomeIcon icon={faPenToSquare} style={{color: "#ffffff",marginRight:"10px"}} onClick={()=>props.handleEdit(props.todo.id)}/>
                <FontAwesomeIcon icon={faTrash} style={{color: "#ffffff"}} onClick={()=>props.handleDelete(props.todo.id)}/>
            </div>
        </div>
    )
}