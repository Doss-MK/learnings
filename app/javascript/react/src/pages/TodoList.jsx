import React, { memo } from 'react'

function TodoList({todos}) {
    console.log({todos})
  return (
    <div>
        {todos.map((info, index) => {
            return <p key={index}>{info.name}</p>
        })}
    </div>
  )
}

export default memo(TodoList)