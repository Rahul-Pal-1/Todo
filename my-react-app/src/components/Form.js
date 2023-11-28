import React , {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid'

const Form = ({input, setInput, todo, setTodo, setEditTodo, editTodo}) => {
    const [btn, setBtn] = useState(false);
    const updateTodo = (title,id,completed) =>{
        const newTodo = todo.map((todos) => 
            (todos.id === id) ? {title, id, completed} : todos
        );
        setTodo(newTodo);
        setEditTodo('');
    };
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
            setBtn(true);
        }else{
            setInput('');
            setBtn(false);
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    
    const onFormSubmit = (event)=> {
        event.preventDefault();
        if(!editTodo){
            setTodo([...todo, {id : uuidv4(), title: input, completed:false}]);
            setInput("");
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input type='text' placeholder='Enter the work...' className='task-input' value = {input} required onChange={onInputChange}/>
            <button className='button-add' type='submit'>
                {btn ? 'OK' : 'Add'}
            </button>
        </form>
    );
};

export default Form;