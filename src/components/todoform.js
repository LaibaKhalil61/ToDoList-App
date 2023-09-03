import React,{useState} from 'react'
export function TodoForm(props){
    return (
        <form className='todoform' onSubmit={props.handleClick}>
            <input type='text' 
            placeholder='What is the task today?'  
            className='input-bar' 
            value={props.value} 
            onChange={props.handleChange}/>
            <button className='Btn' 
            type='submit'>
                Add task
            </button>
        </form>
    )
}