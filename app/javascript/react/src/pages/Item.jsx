import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../features/cake';
import { buyIce } from '../features/ice';

function Item(props) {
  return (
    <div className='bg-light mt-5 p-5'>
        <h3>Cake Count : {props.cakeItem.count} </h3>
        <h3>Cake Count : {props.iceItem.count} </h3>

        <button className='btn btn-primary' onClick={props.buyCakeFunc}>Buy Cake</button>
        <button className='btn btn-primary' onClick={props.buyIceFunc}>Buy Ice</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const cakeItem = state.cake.value
    const iceItem = state.ice.value

    return {
        cakeItem,
        iceItem
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const buyCakeFunction = () => dispatch(buyCake(1))
  const buyIceFunction = () => dispatch(buyIce(1))
  return {
    buyCakeFunc: buyCakeFunction, 
    buyIceFunc: buyIceFunction,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)