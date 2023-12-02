import React from "react";

const Todolist = ({ todo, setTodo, setEditTodo }) => {
    const change = (event) => {
        event.preventDefault();
    };

    const handleComplete = (selectedTodo) => {
        setTodo(todo.map((item) => {
            if (item.id === selectedTodo.id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }));
    };

    const handleEdit = ({ id }) => {
        const edit = todo.find((todos) => todos.id === id);
        setEditTodo(edit);
        
    };

    const handleDelete = ({ id }) => {
        setTodo(todo.filter((todos) => todos.id !== id));
    };

    return (
        <div>
            {todo.map((todos) => (
                <li className={`${todos.completed ? 'complete list-item' : "list-item"}`} key={todos.id}>
                    <input type="text" value={todos.title} className="list" onChange={change} />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todos)}>
                            complete<i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todos)}>
                            edit<i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todos)}>
                            delete<i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default Todolist;
