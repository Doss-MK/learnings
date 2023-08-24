import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import TodoList from './TodoList'

const UserContext = createContext()

function Hook(props) {
  const [name, setName] = useState("")
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef()

  useEffect(() => {
    console.log({name})
  }, [name])

  const changeHeader = () => {
    const header = document.querySelector('.header')
    header.innerText = 'Title has changed'
  }

  const focusInput = () => {
    console.log('testing')
    inputRef.current.focus()
  }

  return (
    <UserContext.Provider value={name}>
      <div className='mx-auto w-75 mt-5 bg-light p-5'>
          <h4 className='text-center header'>Hooks Examples</h4>
          <input type='text' className='form-control mt-2' placeholder='user name' onKeyUp={(e) => setName(e.target.value)}/>
          <h5 className='mt-2'>User Name : {name}</h5>
          <button className='btn btn-primary mt-2' onClick={() => changeHeader()}>Change Title</button>

          <input type='text' className='form-control mt-3' placeholder='input-ref-hook' ref={inputRef} onKeyUp={(e) => setInputValue(e.target.value)}/>
          <button className='btn btn-secondary mb-5' onClick={() => focusInput()}>Focuse Input</button>
          <Component1 />
      </div>
    </UserContext.Provider>
  )
}

function Component1() {
  return(
    <>
      <h1>Component 1</h1>
      <Component2 />
    </>
  )
}

function Component2() {
  const user = useContext(UserContext)
  console.log({user})
  return(
    <>
      <h1>Component 2 User Name : {user}</h1>
      <Todo />
    </>
    
  )
}

function Todo() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([{id: 1, name: 'todo-1'}, {id: 2, name: 'todo-2'}])

  const increment = (c) => {
    setCount((c) => c + 1);
  }

  return(
    <>
      <h4>Todo Count {count}</h4>
      <TodoList todos={todos} />
      <button className='form-control' onClick={() => increment(1)}>Add Count</button>
    </>
  )
}



export default Hook