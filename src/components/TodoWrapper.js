import React,{useState} from 'react'
import { v4 as uuidv4 } from "uuid";
import { TodoForm } from './todoform'
import { TodoList } from './Todolist'
import { EditForm } from './EditForm'

export function ToDoWrapper(){
    const[Todos,setTodos] = useState([
    ]);
    const[value,setValue] = useState('');
    function handleChange(e){
        setValue(e.target.value);
    }
    function handleClick(event){
        event.preventDefault();
        setTodos((prevlist)=>{
            return (
                [...prevlist,{id :uuidv4(),todo:value,isCompleted:false,isEditing:false}]
            )
        })
        console.log(Todos);
        setValue("");
    }
    function handleEdit(Id){
        setTodos((prevTodos)=>{
            return prevTodos.map((todoItem)=>{
                return todoItem.id === Id ? {...todoItem,isEditing: !todoItem.isEditing }:todoItem;
            })
        })
    }
    function handleEditTask(e,Id,val){
        e.preventDefault();
        setTodos((prevTodos)=>{
            return prevTodos.map((todoItem)=>{
                return todoItem.id === Id ? {...todoItem,todo: val,isEditing: !todoItem.isEditing}:todoItem;
            })
        })
        
    }
    function handleDelete(Id){
        setTodos((prevTodos)=>{
            return prevTodos.filter((todoItem)=>{
                return todoItem.id != Id;
            })
        })
    }
    function toggleComplete(Id){
        setTodos((prevTodos)=>{
            return prevTodos.map((todoItem)=>{
                return todoItem.id === Id ? {...todoItem,isCompleted: !todoItem.isCompleted }:todoItem;
            })
        })
    }
    return (
        <div className='TodoWrapper'>
            <h2>Get Things Done !!</h2>
            <TodoForm handleChange = {handleChange}
            handleClick = {handleClick}
            value = {value}/>
            {Todos.map((todoItem)=>(
                todoItem.isEditing ? (<EditForm todo = {todoItem}
                handleEditTask= {handleEditTask}/>) :
                (<TodoList key={todoItem.id}
                    todo={todoItem}
                    handleEdit = {handleEdit}
                    handleDelete = {handleDelete}
                    toggleComplete = {toggleComplete}/>)
                    )
                    )}
        </div>
    )
}