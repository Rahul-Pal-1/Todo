import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Todolist from './components/todolist';
const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className='container'>
      <div className='app-wrapper'> 
        <div><Header/></div>
        <div>
          <Form  input={input}
                setInput = {setInput}
                todo = {todo}
                setTodo = {setTodo}
                setEditTodo={setEditTodo}
                editTodo = {editTodo}
          />
        </div>
        <div>
          <Todolist todo={todo} setTodo={setTodo} setEditTodo={setEditTodo}/>
        </div>
      </div> 
    </div>
  );
};

export default App;
