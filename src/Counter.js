import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT, DECREMENT } from './actionTypes'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  const increment = () => dispatch({ type: INCREMENT })
  const decrement = () => dispatch({ type: DECREMENT })

  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
