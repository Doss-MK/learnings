import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/cake';

function Cake() {
  const dispatch = useDispatch();
  const cake = useSelector(state => state.cake.value)
  return (
    <div className='w-50 bg-light mx-auto mt-5 p-5'>
      <h3>Total Cake Count : {cake.count}</h3>
      <button onClick={() => dispatch(addItem(1))} className='btn btn-primary'>Add Cake Item</button>
    </div>
  )
}

export default Cake