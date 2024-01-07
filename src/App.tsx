import React, {RefObject, useEffect, useRef, useState} from 'react';
import './App.css';
import {Input} from "./Components/Input";
import Button from "./Components/Button";

type TodosType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])
    // const [newTitle, setNewTitle] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchFoo()
    }, []) // Если просто [] догда выпполниться один раз. Если есть useState либо же два и более то выполниться столько раз сколько стэйт поменялся

    console.log(todos)

    const ShowHandler = () => {
        fetchFoo()
    }

    const hideHandler = () => {
        setTodos([])
    }

    const addNewTask = () => {
        if(inputRef.current){
            const newTask = {
                userId: 666,
                id: todos.length + 1,
                title: inputRef.current.value,
                completed: false
            }
            setTodos([newTask, ...todos])
            inputRef.current.value = ''
            // setNewTitle('')
        }


    }
    return (
        <div>
            <div>
                <button onClick={ShowHandler}>Show todos</button>
                <button onClick={hideHandler}>Hide todos</button>
            </div>

            <div>
                <Input
                    inputRef={inputRef}
                    // newTitle={newTitle}
                    //    setNewTitle={setNewTitle}
                />
                <Button onclick={addNewTask} name={'+'}/>
            </div>
            <ul>
                {todos.map(el => {
                    return (
                        <li>
                            <span>{el.id} - </span>
                            <span>{el.title}</span>
                            <input type={"checkbox"} checked={el.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;

