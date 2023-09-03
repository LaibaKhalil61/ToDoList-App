import React from 'react'
export function EditForm(props){
    const[value,setValue] = React.useState(props.todo.todo);
    function handleChange(e){
        setValue(e.target.value);
        
    }
    return (
        <form className='todoform' onSubmit={(event)=>props.handleEditTask(event,props.todo.id,value)}>
            <input type='text'  
            className='input-bar' 
            value={value} 
            onChange={handleChange}/>
            <button className='Btn-2' 
            type='submit'>
                Update Task
            </button>
        </form>
    )
}