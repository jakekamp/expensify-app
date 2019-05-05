import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'

import { addExpense } from './actions/expenses'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { setTextFilter } from './actions/filters'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()


store.dispatch(addExpense({ description: 'water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'rent', amount: 109500 }))


// store.dispatch(setTextFilter('water'))


const state = store.getState()
const visibleExpense = getVisibleExpenses(state.expenses, state.filters)



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))


