import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/ice'
import Item from './Item';

function IceCream() {
  const dispatch = useDispatch();
  const ice = useSelector(state => state.ice.value)
  return (
    <div className='bg-light w-50 mx-auto mt-5 p-5'>
      <h3>Ice Cream Count: {ice.count}</h3>
      <button onClick={() => dispatch(addItem(1))} className='btn btn-primary'>Add Item</button>
      <Item ice={true}/>
    </div>
  )
}

export default IceCream