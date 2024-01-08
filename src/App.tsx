import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import s from './components/superButton.module.css'
import {SuperTodolist} from "./components/SuperTodolist";


function App() {
    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]

    return (
        <div>
            {/*<SuperButton*/}
            {/*    onClick={()=>{}}*/}
            {/*    name={'BLUE BUTTON'}*/}
            {/*    className={s.stylesForSuperButton}*/}
            {/*/>*/}

            {/*<SuperButton*/}
            {/*    onClick={()=>{}}*/}
            {/*    //name={''}*/}
            {/*    className={s.stylesForSuperButton}*/}
            {/*>BLUE BUTTON</SuperButton>*/}

            {/*<SuperButton onClick={() => {}} color={'blue'}>BLUE BUTTON</SuperButton>*/}
            {/*<SuperButton onClick={() => {}} color={'red'} disabled> RED BUTTON</SuperButton>*/}
            {/*<SuperButton onClick={() => {}} > DEFAULT BUTTON</SuperButton>*/}

            <SuperTodolist tasks={tasks}>
                <SuperButton onClick={() => {}} color={'blue'}>BLUE BUTTON</SuperButton>
                <SuperButton onClick={() => {}} color={'red'} disabled> RED BUTTON</SuperButton>
                <SuperButton onClick={() => {}} > DEFAULT BUTTON</SuperButton>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <input type="text"/>
            </SuperTodolist>
            <SuperTodolist tasks={tasks}>
                <SuperButton onClick={() => {}} color={'blue'}>BLUE BUTTON</SuperButton>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
            </SuperTodolist>
            <SuperTodolist tasks={tasks}>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <p>ggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <input type="text"/>
                <input type="text"/>
            </SuperTodolist>

        </div>
    );
}


export default App;
