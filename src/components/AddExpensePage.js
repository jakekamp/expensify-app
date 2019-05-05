import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'

import { addExpense } from '../actions/expenses'


const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/') // this is how you can ridirect to a page. it is part of the router
        }} />
    </div>
)


export default connect()(AddExpensePage)