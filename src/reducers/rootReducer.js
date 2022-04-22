import { combineReducers } from 'redux'
import countReducer from './count'
import numsReducer from './nums'

const rootReducer = combineReducers({ count: countReducer, nums: numsReducer })

// const rootReducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case 'CHANGE_NUM':
//       return { ...state, [action.num]: action.value }
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 }
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 }
//     case 'RESET':
//       return { ...state, count: 0 }
//     default:
//       return state
//   }
// }

export default rootReducer
