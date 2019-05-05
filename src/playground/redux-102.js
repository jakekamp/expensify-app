
import { createStore } from 'redux'




// action generators

const incrementCount = ({ incrementBy = 1 } = {}) =>  ({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})
const resetCount = () => ({
    type: 'RESET',
})
const setCount = ({ count = 101 } = {}) => ({
    type: 'SET',
    count 
})


// reducers
// 1. reducers are pure funtcion - no side efects, only determined by what is passed. don't touch outside scopes
// never change state or action

const countReducer = (state = {count: 0}, action) => {
    
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count,
            }
        default:
            return state
    }

}

// create store

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState())
})

// dispatch to store

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(decrementCount())
store.dispatch(setCount({ count: 101 }))


