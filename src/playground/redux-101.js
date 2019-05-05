import { createStore } from 'redux'


// Action generators return action objects - this makes it easier to use dispatch

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy,
})

const reset = () => ({
    type: 'RESET'
})

const set = ({ count = 0 } = {}) => ({
    type: 'SET',   
    count
})


// reducers
// key atributes
// 1. pure function - output only determined by input.. no side effects
// 2. never change state or action


const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof(action.decrementBy) === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state
    }

}


// redux store

const store = createStore(countReducer)


// how to subscribe to the store... by putting the function in a variable, you can unsubscribe by calling the variable

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})



// dispatch functions

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5,
// })
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(reset())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(set({ count: 101 }))


